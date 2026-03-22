import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("fav");
    setFavorites(stored ? JSON.parse(stored) : []);
  }, []);

  return (
    <div className="px-[6%] py-12 min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-2">
          Your Favorites ❤️
        </h1>
        <p className="text-neutral-400">
          Recipes you couldn’t emotionally detach from
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-3 gap-8">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="col-span-3 text-center text-neutral-400">
            No favorites yet. You’re either very disciplined… or very confused.
          </div>
        )}
      </div>
    </div>
  );
};

export default Fav;