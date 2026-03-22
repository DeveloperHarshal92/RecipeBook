import React from "react";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-[8%]">
      
      <div className="text-center max-w-2xl">

        {/* BIG 404 */}
        <h1 className="text-[120px] font-black leading-none bg-linear-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-6xl font-semibold mt-4 bg-linear-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent pb-5">
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="text-neutral-400 pt-3">
          Looks like this page doesn’t exist or got lost in the kitchen.
          Maybe the chef forgot the recipe.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-4 pt-5 pb-8">
          <button
            onClick={() => navigate("/")}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate("/recipes")}
            className="border border-neutral-700 px-6 py-3 rounded-lg text-neutral-200 hover:bg-neutral-900 transition"
          >
            Browse Recipes
          </button>
        </div>

        {/* DECORATIVE CARD (matches your UI style) */}
        <div className="mt-16 border border-neutral-800 bg-neutral-900 rounded-xl p-6 text-left">
          <h3 className="font-semibold mb-2">Lost?</h3>
          <p className="text-sm text-neutral-400">
            Try exploring recipes or add your own. At least something useful
            will come out of this mistake.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PageNotFound;