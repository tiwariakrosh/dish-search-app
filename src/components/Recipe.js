import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, calories, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <p>calories={calories}</p>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};
 
export default Recipe;