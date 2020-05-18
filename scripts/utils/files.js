const path = require("path");
const tol = require("./tol");

function numbered() {
  const tolQualitative = tol.qualitative();
  const tolDiscrete = tol.discrete();

  return [
    { number: 2, set: tolQualitative.highContrast },
    { number: 3, set: tolQualitative.highContrast },
    { number: 4, set: tolQualitative.bright },
    { number: 5, set: tolQualitative.bright },
    { number: 6, set: tolQualitative.bright },
    { number: 7, set: tolQualitative.bright },
    { number: 8, set: tolQualitative.light },
    { number: 9, set: tolQualitative.light },
    { number: 10, set: tolQualitative.muted },
    { number: 11, set: tolQualitative.legacy },
    { number: 12, set: tolQualitative.legacy },
  ];
}

function named() {
  const tolQualitative = tol.qualitative();
  const tolDiscrete = tol.discrete();

  return [
    { fileName: "index", set: tolQualitative.bright },
    { fileName: "tol-high-contrast", set: tolQualitative.highContrast },
    { fileName: "tol-bright", set: tolQualitative.bright },
    { fileName: "tol-light", set: tolQualitative.light },
    { fileName: "tol-muted", set: tolQualitative.muted },
    { fileName: "tol-legacy", set: tolQualitative.legacy },
    { folderName: "tol-discrete-rainbow", sets: tolDiscrete },
  ];
}

function ingestRecipe(recipe) {
  if (recipe.number && recipe.set) {
    const path = recipe.number.toString();
    const contents = recipe.set.slice(0, recipe.number);
    if (contents.length !== recipe.number)
      throw new Error(`Recipe not long enough: ${JSON.stringify(recipe)}`);
    return { path, contents };
  } else if (recipe.fileName && recipe.set) {
    return { path: recipe.fileName, contents: recipe.set };
  } else if (recipe.folderName && recipe.sets) {
    return recipe.sets.map((set) =>
      ingestRecipe({
        fileName: path.join(recipe.folderName, set.length.toString()),
        set,
      })
    );
  } else {
    throw new Error(`Bad recipe: ${JSON.stringify(recipe)}`);
  }
}

function main() {
  return [...numbered(), ...named()].flatMap(ingestRecipe);
}

module.exports = main;
