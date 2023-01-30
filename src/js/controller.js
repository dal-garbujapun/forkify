import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    // get hash from the URL
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    // Load recipe
    await model.loadRecipe(id);

    // Render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
};

["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);
// window.addEventListener("hashchange", showRecipe);
// window.addEventListener("load", showRecipe);
