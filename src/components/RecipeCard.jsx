import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  const isFav = favorite.some((f) => f.id === recipe.id);

  const FavHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const updatedFav = [...favorite, recipe];
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    window.location.reload(); // quick hack (not elegant, but works)
  };

  const UnFavHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const updatedFav = favorite.filter((f) => f.id !== recipe.id);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    window.location.reload();
  };
  return (
    <Link to={`/recipes/details/${recipe.id}`}>
      <div
        className="
          group
          bg-neutral-900
          rounded-xl
          overflow-hidden
          border border-neutral-800
          hover:border-neutral-700
          transition
          cursor-pointer
        "
      >
        {/* IMAGE */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />

          <span
            className="
              absolute top-3 left-3
              text-xs
              bg-black/70
              text-white
              px-3 py-1
              rounded-full
              backdrop-blur
            "
          >
            {recipe.category}
          </span>

          {/* ❤️ HEART BUTTON */}
          {isFav ? (
            <button className="absolute top-3 right-3 z-50 bg-black/50 backdrop-blur p-2 rounded-full border border-white/20 hover:bg-black/70 transition">
              <svg
                onClick={UnFavHandler}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-5 h-5 text-white transition"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          ) : (
            <button className="absolute top-3 right-3 z-50 bg-black/50 backdrop-blur p-2 rounded-full border border-white/20 hover:bg-black/70 transition">
              <svg
                onClick={FavHandler}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white transition"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold leading-snug">{recipe.title}</h3>

          <p className="text-sm text-neutral-400">By {recipe.chef}</p>

          <p className="text-sm text-neutral-500 line-clamp-2">{recipe.desc}</p>
        </div>

        {/* FOOTER */}
        <div className="px-4 pb-4">
          <span
            className="
              text-sm
              text-red-300
              hover:text-red-200
              transition
            "
          >
            View Recipe →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
