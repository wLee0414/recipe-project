import React from "react";

function RecipeCreate({ onSubmit }) {

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const cuisine = formData.get('cuisine');
    const photo = formData.get('photo');
    const ingredients = formData.get('ingredients');
    const preparation = formData.get('preparation');
    
    const newRecipe = {
      name: name,
      cuisine: cuisine,
      photo: photo,
      ingredients: ingredients,
      preparation: preparation,
    };

    onSubmit(newRecipe);

    event.target.reset();
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" type="text" placeholder="Name"/></td>
            <td><input name="cuisine" type="text" placeholder="Cuisine" /></td>
            <td><input name="photo" type="text" placeholder="URL" /></td>
            <td><textarea name="ingredients" placeholder="Ingredients" /></td>
            <td><textarea name="preparation" placeholder="Preparation" /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;