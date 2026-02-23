import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
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
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold leading-snug">
            {recipe.title}
          </h3>

          <p className="text-sm text-neutral-400">
            By {recipe.chef}
          </p>

          <p className="text-sm text-neutral-500 line-clamp-2">
            {recipe.desc}
          </p>
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