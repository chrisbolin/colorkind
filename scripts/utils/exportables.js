const path = require("path");
const tol = require("./tol");

const recipes = [
  // default
  {
    fileName: "index",
    set: tol.qualitative.bright,
    description: tol.descriptions.bright,
  },
  // numbered
  {
    number: 2,
    set: tol.qualitative.highContrast,
    description: tol.descriptions.highContrast,
  },
  {
    number: 3,
    set: tol.qualitative.highContrast,
    description: tol.descriptions.highContrast,
  },
  {
    number: 4,
    set: tol.qualitative.bright,
    description: tol.descriptions.bright,
  },
  {
    number: 5,
    set: tol.qualitative.bright,
    description: tol.descriptions.bright,
  },
  {
    number: 6,
    set: tol.qualitative.bright,
    description: tol.descriptions.bright,
  },
  {
    number: 7,
    set: tol.qualitative.bright,
    description: tol.descriptions.bright,
  },
  {
    number: 8,
    set: tol.qualitative.light,
    description: tol.descriptions.light,
  },
  {
    number: 9,
    set: tol.qualitative.light,
    description: tol.descriptions.light,
  },
  {
    number: 10,
    set: tol.qualitative.muted,
    description: tol.descriptions.muted,
  },
  {
    number: 11,
    set: tol.qualitative.legacy,
    description: tol.descriptions.legacy,
  },
  {
    number: 12,
    set: tol.qualitative.legacy,
    description: tol.descriptions.legacy,
  },
  // named
  {
    fileName: "tol-high-contrast",
    set: tol.qualitative.highContrast,
    description: tol.descriptions.highContrast,
  },
  {
    fileName: "tol-bright",
    set: tol.qualitative.bright,
    description: tol.descriptions.bright,
  },
  {
    fileName: "tol-light",
    set: tol.qualitative.light,
    description: tol.descriptions.light,
  },
  {
    fileName: "tol-muted",
    set: tol.qualitative.muted,
    description: tol.descriptions.muted,
  },
  {
    fileName: "tol-legacy",
    set: tol.qualitative.legacy,
    description: tol.descriptions.legacy,
  },
  {
    folderName: "tol-discrete-rainbow",
    sets: tol.discrete,
    description: tol.descriptions.discrete,
  },
];

function ingestRecipe(recipe) {
  if (recipe.number && recipe.set) {
    const path = recipe.number.toString();
    const contents = recipe.set.slice(0, recipe.number);
    if (contents.length !== recipe.number)
      throw new Error(`Recipe not long enough: ${JSON.stringify(recipe)}`);
    return { path, contents, description: recipe.description };
  } else if (recipe.fileName && recipe.set) {
    return {
      path: recipe.fileName,
      contents: recipe.set,
      description: recipe.description,
    };
  } else if (recipe.folderName && recipe.sets) {
    return recipe.sets.map((set) =>
      ingestRecipe({
        fileName: path.join(recipe.folderName, set.length.toString()),
        set,
        description: recipe.description,
      })
    );
  } else {
    throw new Error(`Bad recipe: ${JSON.stringify(recipe)}`);
  }
}

function main() {
  return recipes.flatMap(ingestRecipe);
}

module.exports = main;
