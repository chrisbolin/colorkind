const path = require("path");
const fs = require("fs").promises;
const getBuiltPackageStats = require("package-build-stats");

const PROJECT_ROOT = "../";

async function main() {
  const projectPath = path.resolve(__dirname, PROJECT_ROOT);
  const package = require(path.resolve(projectPath, "package.json"));
  const [localStats, npmStats] = await Promise.all([
    getBuiltPackageStats(projectPath),
    getBuiltPackageStats(package.name),
  ]);

  console.log("local build", localStats);
  console.log("npm build", npmStats);

  const minSizeDelta = localStats.size - npmStats.size;
  const gzipSizeDelta = localStats.gzip - npmStats.gzip;
  if (minSizeDelta > 0) {
    console.error(`minified size has grown by ${minSizeDelta}B`);
  }
  if (gzipSizeDelta > 0) {
    console.error(`gzipped size has grown by ${gzipSizeDelta}B`);
  }
  if (minSizeDelta === 0 && gzipSizeDelta === 0) {
    console.log("✨ size has not changed at all.");
  }
}

main();
