const fs = require("fs").promises;
const path = require("path");
const files = require("./utils/files");

const DIST_ROOT = path.resolve(__dirname, "../dist");

function jsFile(contents) {
  return `module.exports = ${JSON.stringify(contents, null, 2)};`;
}

function tableHeader() {
  return [
    "| Import path | Colors |  Description |",
    "| ------ | ------ | ------ |",
  ].join("\n");
}

function tableRow(file, fullPath) {
  const count = file.contents.length;
  let importString = "colorkind";
  if (file.path !== "index") {
    importString = importString + "/" + file.path;
  }
  return `| ${"`" + importString + "`"} | ${count} | ${file.description} |`;
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
  for (file of files()) {
    const fullPath = path.resolve(DIST_ROOT, file.path) + ".js";
    await ensurePath(fullPath);
    console.log(tableRow(file, fullPath));
    await fs.writeFile(fullPath, jsFile(file.contents));
  }
}

main();
