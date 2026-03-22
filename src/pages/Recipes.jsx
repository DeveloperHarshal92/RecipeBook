import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const renderRecipes = Array.isArray(data)
  ? data.map(recipe => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))
  : [];

  return (
    <div className="px-[6%] py-12">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-black pb-2">Recipes</h1>
        <p className="text-neutral-400 pb-3">
          Explore handcrafted recipes from real chefs
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {data.length > 0 ? renderRecipes : "No recipes found!"}
      </div>

    </div>
  );
};

export default Recipes;