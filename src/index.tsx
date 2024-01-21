import { writeFile, readdir, mkdir, readFile } from "fs/promises";
import { resolve, relative } from "path";
import { exec } from "child_process";
import { promisify } from "util";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const RUDIMENTS_DIR = "rudiments/";
const BUILD_DIR = "build";
const SVG_DIR = "assets/";

const execPromise = promisify(exec);
async function buildRudiment(rudimentFile: string, outputDir: string) {
  const command = `
    lilypond --svg -dcrop=#t -dpoint-and-click=#f --output="${outputDir}" ${rudimentFile};
  `.trim();
  console.log(command);
  const { stderr } = await execPromise(command);
  console.log(stderr);
}

async function buildRudiments(outputDir: string) {
  const base = resolve(process.cwd(), RUDIMENTS_DIR);
  const files = await readdir(base);
  await Promise.all(
    files.map((file) =>
      buildRudiment(relative(process.cwd(), resolve(base, file)), outputDir)
    )
  );
}

async function buildHtml() {
  const css = await readFile("./src/index.css", { encoding: "utf-8" });
  const content = renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rudiments</title>
        <style>{css}</style>
      </head>

      <body>
        <h1>Rudiments</h1>
        <img
          src="./assets/single-stroke-roll.cropped.svg"
          alt="Single Stroke Roll"
        />
        <img
          src="./assets/double-stroke-roll.cropped.svg"
          alt="Double Stroke Roll"
        />
        <img src="./assets/paradiddle.cropped.svg" alt="Paradiddle" />
      </body>
    </html>
  );
  return `<!DOCTYPE html>${content}`;
}

async function writePage(content: string) {
  const svgDir = resolve(BUILD_DIR, SVG_DIR);
  await mkdir(svgDir, { recursive: true });
  await buildRudiments(svgDir);
  await writeFile("./build/index.html", content, "utf-8");
}

await writePage(await buildHtml());
