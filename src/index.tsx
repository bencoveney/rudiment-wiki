import { writeFile, readdir, mkdir, readFile } from "fs/promises";
import { resolve, relative } from "path";
import { exec } from "child_process";
import { promisify } from "util";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { RudimentMetadata, metadata } from "./metadata.js";

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
    };
  });
}

const execPromise = promisify(exec);
async function buildRudiment(rudiment: Rudiment, outputDir: string) {
  const command = `
    lilypond --svg -dcrop=#t -dpoint-and-click=#f --output="${outputDir}" ${rudiment.lilypadPath};
  `.trim();
  const { stderr } = await execPromise(command);
  console.log(stderr);
  const loadedSvg = await readFile(resolve(BUILD_DIR, rudiment.svgPath), {
    encoding: "utf-8",
  });
  rudiment.loadedSvg = loadedSvg;
}

async function buildRudiments(rudiments: Rudiment[], outputDir: string) {
  await Promise.all(
    rudiments.map((rudiment) => buildRudiment(rudiment, outputDir))
  );
}

async function buildHtml(rudiments: Rudiment[]) {
  const css = await readFile("./src/index.css", { encoding: "utf-8" });
  const metronome = await readFile("./src/metronome.js", { encoding: "utf-8" });
  const content = renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rudiment Wiki</title>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <script dangerouslySetInnerHTML={{ __html: metronome }} />
        <link
          rel="icon"
          type="image/png"
          href="https://emojifavicon.dev/favicons/1f941.png"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://emojifavicon.dev/favicons/1f941.ico"
        />
      </head>
      <body>
        <main>
          <h1>
            Rudiment <span className="wiki">Wiki</span>
          </h1>
          {rudiments.map((rudiment, index) => (
            <section className="rudiment" key={index}>
              <div className="rudiment-title">
                {/* <span className="rudiment-number">{rudiment.number}:</span> */}
                <h2>{rudiment.name}</h2>
              </div>
              <div
                className="rudiment-notation"
                dangerouslySetInnerHTML={{ __html: rudiment.loadedSvg }}
              ></div>
            </section>
          ))}
        </main>
        <footer>
          <span className="metronome_name">Metronome</span>
          <label className="metronome_bpm_wrapper">
            BPM{" "}
            <input id="metronome_bpm" type="number" min={1} defaultValue={60} />
          </label>
          <button id="metronome_playstop">Play</button>
          <span className="footer_about">
            <a href="https://github.com/bencoveney/rudiments">About</a>
          </span>
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
