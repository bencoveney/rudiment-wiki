import { writeFile } from "fs/promises";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

function buildHtml() {
  const content = renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rudiments</title>
      </head>

      <body>
        <h1>Rudiments</h1>
      </body>
    </html>
  );
  return `<!DOCTYPE html>${content}`;
}

async function writePage(content: string) {
  await writeFile("./build/index.html", content, "utf-8");
}

await writePage(buildHtml());
