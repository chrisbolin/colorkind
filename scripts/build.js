const fs = require("fs").promises;
const path = require("path");
const exportables = require("./utils/exportables");

const DIST_ROOT = path.resolve(__dirname, "../dist");

function jsFile(contents) {
  return `module.exports = ${JSON.stringify(contents, null, 2)};`;
}

function tsDeclarationFile() {
  return ["const colors: Array<string>;", "export = colors;"].join("\n");
}

function tableHeader() {
  return [
    "| Import path | Colors |  Description |",
    "| ------ | ------ | ------ |",
  ].join("\n");
}

function tableRow(exportable, fullPath) {
  const count = exportable.contents.length;
  let importString = "colorkind";
  if (exportable.path !== "index") {
    importString = importString + "/dist/" + exportable.path;
  }
  return `| ${"`" + importString + "`"} | ${count} | ${
    exportable.description
  } |`;
}

async function ensurePath(filePath) {
  const dir = path.dirname(filePath);
  try {
    await fs.mkdir(dir);
  } catch (err) {
    if (err.code !== "EEXIST") {
      throw err;
    }
  }
}

async function main() {
  console.log(tableHeader());
  for (exportable of exportables()) {
    const fullPath = path.resolve(DIST_ROOT, exportable.path) + ".js";
    const fullTSDeclarationPath =
      path.resolve(DIST_ROOT, exportable.path) + ".d.ts";
    await ensurePath(fullPath);
    console.log(tableRow(exportable, fullPath));
    await fs.writeFile(fullPath, jsFile(exportable.contents));
    await fs.writeFile(fullTSDeclarationPath, tsDeclarationFile());
  }
}

main();
