import React from "react";

function RecipeList({ recipes, onDeleteRecipe }) {
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => (
            <tr key={recipe.name}>
              <td><p>{recipe.name}</p></td>
              <td><p>{recipe.cuisine}</p></td>
              <td><img src={recipe.photo} alt={recipe.name} style={{ width: "100px" }} /></td>
              <td className="content_td"><p>{recipe.ingredients}</p></td>
              <td className="content_td"><p>{recipe.preparation}</p></td>
              <td>
                <button name="delete" onClick={() => onDeleteRecipe(recipe.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
