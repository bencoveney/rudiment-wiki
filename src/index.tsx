import { writeFile, readdir, mkdir, readFile } from "fs/promises";
import { resolve, relative } from "path";
import { exec } from "child_process";
import { promisify } from "util";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const RUDIMENTS_DIR = "rudiments/";
const BUILD_DIR = "build/";
const SVG_DIR = "assets/";

type Rudiment = {
  lilypadPath: string;
  name: string;
  slug: string;
  svgPath: string;
};
async function getRudiments() {
  const base = resolve(process.cwd(), RUDIMENTS_DIR);
  const files = await readdir(base);
  return files.map<Rudiment>((fileName) => {
    const lilypadPath = relative(process.cwd(), resolve(base, fileName));
    const slug = fileName.split(".")[0];
    let name = "";
    for (let i = 0; i < slug.length; i++) {
      const character = slug[i];
      if (character === "-") {
        i++;
        name += " ";
        name += slug[i].toUpperCase();
      } else {
        name += i === 0 ? character.toUpperCase() : character;
      }
    }
    const svgPath = `/${SVG_DIR}${slug}.cropped.svg`;
    return {
      lilypadPath,
      name,
      slug,
      svgPath,
    };
  });
}

const execPromise = promisify(exec);
async function buildRudiment(rudimentFile: string, outputDir: string) {
  const command = `
    lilypond --svg -dcrop=#t -dpoint-and-click=#f --output="${outputDir}" ${rudimentFile};
  `.trim();
  console.log(command);
  const { stderr } = await execPromise(command);
  console.log(stderr);
}

async function buildRudiments(rudiments: Rudiment[], outputDir: string) {
  await Promise.all(
    rudiments.map((rudiment) => buildRudiment(rudiment.lilypadPath, outputDir))
  );
}

async function buildHtml(rudiments: Rudiment[]) {
  const css = await readFile("./src/index.css", { encoding: "utf-8" });
  const content = renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          <h1>Rudiments</h1>
        </title>
        <style>{css}</style>
      </head>
      <body>
        <h1>Rudiments</h1>
        {rudiments.map((rudiment, index) => (
          <div>
            <h2>{rudiment.name}</h2>
            <img key={index} src={rudiment.svgPath} alt={rudiment.name} />
          </div>
        ))}
      </body>
    </html>
  );
  return `<!DOCTYPE html>${content}`;
}

async function buildSite() {
  const rudiments = await getRudiments();
  const svgDir = resolve(BUILD_DIR, SVG_DIR);
  await mkdir(svgDir, { recursive: true });
  await buildRudiments(rudiments, svgDir);
  const content = await buildHtml(rudiments);
  await writeFile("./build/index.html", content, "utf-8");
}

await buildSite();
