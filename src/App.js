import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"; 

function App() {
  const [recipes, setRecipes] = useState(RecipeData);


  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };


const handleDeleteRecipe = (recipeName) => {
  const updatedRecipes = recipes.filter(recipe => recipe.name !== recipeName);
  setRecipes(updatedRecipes);
};

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />
      <RecipeCreate onSubmit={handleAddRecipe} />
    </div>
  );
}

export default App;
