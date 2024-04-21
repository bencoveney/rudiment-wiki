import { writeFile, readdir, mkdir, readFile } from "fs/promises";
import { resolve, relative } from "path";
import { exec } from "child_process";
import { promisify } from "util";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  Reference,
  RudimentMetadata,
  metadata,
  referenceNames,
} from "./metadata.js";

const skipLilypond = process.argv.includes("--skipLilypond");

const RUDIMENTS_DIR = "rudiments/";
const BUILD_DIR = "build/";
const SVG_DIR = "assets/";

const WORD_BREAK = "_";

type Rudiment = {
  lilypadPath: string;
  name: string;
  slug: string;
  svgPath: string;
  number: number;
  loadedSvg: string;
  compressedSvg: string;
} & RudimentMetadata;
async function getRudiments() {
  const base = resolve(process.cwd(), RUDIMENTS_DIR);
  const files = await readdir(base);
  return files.map<Rudiment>((fileName) => {
    const lilypadPath = relative(process.cwd(), resolve(base, fileName));
    const baseName = fileName.split(".")[0];
    const [numberPart, ...nameParts] = baseName.split(WORD_BREAK);
    const slug = nameParts.join(WORD_BREAK);
    const number = parseInt(numberPart, 10);
    let name = "";
    for (let i = 0; i < slug.length; i++) {
      const character = slug[i];
      if (character === WORD_BREAK) {
        i++;
        name += " ";
        name += slug[i].toUpperCase();
      } else {
        name += i === 0 ? character.toUpperCase() : character;
      }
    }
    const svgPath = `./${SVG_DIR}${baseName}.cropped.svg`;
    const additional = metadata.find((meta) => meta.file === fileName);
    if (!additional) {
      throw new Error(`Missing metadata for ${fileName}`);
    }
    return {
      ...additional,
      lilypadPath,
      name,
      slug,
      svgPath,
      number,
      loadedSvg: "",
      compressedSvg: "",
    };
  });
}

const execPromise = promisify(exec);
async function buildRudiment(rudiment: Rudiment, outputDir: string) {
  if (!skipLilypond) {
    const command = `
      lilypond --svg -dcrop=#t -dpoint-and-click=#f --output="${outputDir}" ${rudiment.lilypadPath};
    `.trim();
    const { stderr } = await execPromise(command);
    console.log(stderr);
  }
  const loadedSvg = await readFile(resolve(BUILD_DIR, rudiment.svgPath), {
    encoding: "utf-8",
  });
  rudiment.loadedSvg = loadedSvg;
  rudiment.compressedSvg = compressRudiment(loadedSvg);
}

let idMajor = 0;
function compressRudiment(source: string) {
  let smallest = source;

  // Pull groups (the content of <g> tags) out of the files.
  const groupMatcher = /<g(?: \w*="[^"]*")>((?:(?!<\/g>).)+)<\/g>/gs;
  let stripped = smallest;
  const groups: string[] = [];
  let match;
  while ((match = groupMatcher.exec(stripped)) !== null) {
    groups.push(match[1]);
    stripped = stripped.replaceAll(match[1], "");
  }
  // Replace the groups with references to a definition.
  let grouped = smallest.replace("</svg>", "<defs></defs></svg>");
  let idMinor = 0;
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    const id = `g${idMajor}-${idMinor}`;
    const potential = grouped
      .replaceAll(group, `<use href="#${id}"/>`)
      .replace("</defs></svg>", `<g id="${id}">${group}</g></defs></svg>`);
    if (potential.length < grouped.length) {
      grouped = potential;
    }
    idMinor++;
  }
  if (grouped.length < smallest.length) {
    smallest = grouped;
    idMajor++;
  }

  // Remove CSS block.
  const noCss = smallest.replace(
    /<style(?: \w*="[^"]*")>((?:(?!<\/style>).)+)<\/style>/gs,
    ""
  );
  if (noCss.length < smallest.length) {
    smallest = noCss;
  }

  // Remove whitespace.
  const noWhitespace = smallest.replace(/>\s*</g, "><");
  if (noWhitespace.length < smallest.length) {
    smallest = noWhitespace;
  }

  console.log(
    `Compressed ${source.length} to ${smallest.length} (-${Math.round(
      (1 - smallest.length / source.length) * 100
    )}%)`
  );

  return smallest;
}

async function buildRudiments(rudiments: Rudiment[], outputDir: string) {
  await Promise.all(
    rudiments.map((rudiment) => buildRudiment(rudiment, outputDir))
  );
}

function compressCss(source: string): string {
  return source
    .replaceAll(/\/\*((?:(?!\*\/).)+)\*\//gs, "")
    .replaceAll(/\n\s*/gs, "");
}

function compressJs(source: string): string {
  return source.replaceAll(/\/\/.*/g, "").replaceAll(/\n\s*/gs, "");
}

function encodeSvg(source: string): string {
  return source.replace(/\"/g, "%22").replace(/\#/g, "%23");
}

async function buildHtml(rudiments: Rudiment[]) {
  const css = await readFile("./src/index.css", { encoding: "utf-8" });
  const metronome = await readFile("./src/metronome.js", { encoding: "utf-8" });
  const favicon = await readFile("./src/favicon.svg", { encoding: "utf-8" });
  const click = await readFile("./src/click.wav", { encoding: "base64" });
  const gitCommit = await execPromise("git rev-parse --short HEAD");

  const content = renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Drum Rudiment Wiki - Practice the essential drum rudiments
        </title>
        <meta
          name="description"
          content="Essential drum rudiments for practising your chops, sticking, and rhythm"
        />
        <meta
          property="og:title"
          content="Drum Rudiment Wiki - Practice the essential drum rudiments"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Essential drum rudiments for practising your chops, sticking, and rhythm"
        />
        {/*
          Images would be nice, but they need to reference external resources.
          <meta property="og:image" content="https://rudiment.wiki/thumbnail" />
        */}
        <meta property="og:url" content="https://rudiment.wiki" />
        <meta property="og:site_name" content="Drum Rudiment Wiki" />
        <style dangerouslySetInnerHTML={{ __html: compressCss(css) }} />
        <script
          dangerouslySetInnerHTML={{ __html: `window.click = "${click}"` }}
        />
        <script dangerouslySetInnerHTML={{ __html: compressJs(metronome) }} />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml,${encodeSvg(favicon)}`}
        />
      </head>
      <body>
        <main>
          <h1>
            Drum Rudiment <span className="wiki">Wiki</span>
          </h1>
          <hr />
          <nav>
            <ul>
              {rudiments.map((rudiment, index) => {
                return (
                  <li key={index}>
                    {rudiment.number}:{" "}
                    <a href={`#${rudiment.slug}`}>{rudiment.name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <hr />
          {rudiments.map((rudiment, index) => (
            <React.Fragment key={index}>
              <div className="prevent-break">
                <a id={rudiment.slug} />
                <div className="r-title">
                  {/* <span className="r-number">{rudiment.number}:</span> */}
                  <h2>{rudiment.name}</h2>
                </div>
                <section className="r">
                  <div
                    className="r-notation"
                    dangerouslySetInnerHTML={{ __html: rudiment.compressedSvg }}
                  ></div>
                </section>
                <div className="r-links">
                  <span className="r-links-label">Read more on:</span>
                  {Object.entries(rudiment.links).map(([reference, link]) => {
                    const name = referenceNames[reference as Reference];
                    return (
                      <a key={reference} href={link}>
                        {name}
                      </a>
                    );
                  })}
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
          <h2 className="about-title">About</h2>
          <div>
            <aside className="about">
              <p>
                This page is a quick, simple, and free reference for drum
                rudiments. You can print this page to PDF/paper, or save it
                directly to your device (<i>Save As</i> in your browser).
              </p>
              <p>
                You can read the source code for this page and contribute{" "}
                <a href="https://github.com/bencoveney/rudiments">on Github</a>.
                This version of the Rudiments Wiki was built on{" "}
                <i>{new Date().toLocaleString("en-GB")}</i> from commit{" "}
                <code>{gitCommit.stdout.trim()}</code>.
              </p>
            </aside>
          </div>
        </main>
        <footer>
          <span className="metronome_name">Metronome</span>
          <label className="metronome_bpm_wrapper">
            BPM{" "}
            <input
              id="metronome_bpm"
              type="number"
              min={1}
              max={1000}
              defaultValue={60}
            />
          </label>
          <button id="metronome_playstop">Play</button>
        </footer>
      </body>
    </html>
  );
  return `<!DOCTYPE html>${content}`;
}

async function buildSite() {
  const rudiments = await getRudiments();
  // console.log(JSON.stringify(rudiments, null, 2));
  const svgDir = resolve(BUILD_DIR, SVG_DIR);
  await mkdir(svgDir, { recursive: true });
  await buildRudiments(rudiments, svgDir);
  const content = await buildHtml(rudiments);
  await writeFile("./build/index.html", content, "utf-8");
}

await buildSite();
