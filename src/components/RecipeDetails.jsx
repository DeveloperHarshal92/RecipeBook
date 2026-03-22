import { useParams } from "react-router";
import { recipeContext } from "../context/RecipeContext";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => String(recipe.id) === String(params.id));

  const UpdateHandler = (recipe) => {
    const index = data.findIndex(
      (recipe) => String(recipe.id) === String(params.id),
    );
    const copyRecipe = [...data];
    copyRecipe[index] = { ...copyRecipe[index], ...recipe };
    setData(copyRecipe);
    localStorage.setItem("recipes", JSON.stringify(copyRecipe));
    toast.success("Recipe updated successfully!");
  };
  const { register, handleSubmit, reset } = useForm({});
  useEffect(() => {
    if (recipe) {
      reset({
        image: recipe?.image,
        title: recipe?.title,
        chef: recipe?.chef,
        desc: recipe?.desc,
        ingr: recipe?.ingr,
        inst: recipe?.inst,
        category: recipe?.category,
      });
    }
  }, [recipe, reset]);

  const deleteHandler = () => {
    const filteredRecipe = data.filter((recipe) => recipe.id !== params.id);
    setData(filteredRecipe);
    localStorage.setItem("recipes", JSON.stringify(filteredRecipe));

    toast.success("Recipe deleted successfully!");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-full min-h-screen flex bg-neutral-950 text-neutral-100">
      <div className="view w-1/2 relative overflow-hidden group">
        <img
          className="
      w-full h-full object-cover
      transition-transform duration-500
      group-hover:scale-105
    "
          src={recipe.image}
          alt={recipe.title}
        />

        <div
          className="
      absolute inset-0
      bg-linear-to-t from-black/80 via-black/40 to-transparent
      transition-opacity duration-500
      group-hover:opacity-95
    "
        />

        <div
          className="
      absolute bottom-6 left-6
      max-w-[85%]
      space-y-2
      backdrop-blur-md bg-white/15
      border border-white/20
      rounded-xl shadow-lg
      p-4
      transition-all duration-500
      group-hover:bg-white/25
      group-hover:translate-y-1
    "
        >
          <h1 className="text-3xl font-black tracking-tight text-white">
            {recipe.title}
          </h1>

          <p className="text-sm text-neutral-200 font-medium">
            By {recipe.chef}
          </p>

          <p className="text-sm text-neutral-300 line-clamp-3">{recipe.desc}</p>
        </div>
      </div>
      <div className="form w-1/2 p-10 flex recipes-center">
        <form
          onSubmit={handleSubmit(UpdateHandler)}
          className="w-full max-w-lg space-y-5"
        >
          <h2 className="text-3xl font-black text-neutral-100">Edit Recipe</h2>

          <input
            className="w-full bg-transparent border-b border-neutral-600 p-2 outline-none focus:border-yellow-500"
            {...register("image")}
            type="url"
            placeholder="Image URL"
          />

          <input
            className="w-full bg-transparent border-b border-neutral-600 p-2 outline-none focus:border-yellow-500"
            {...register("title")}
            type="text"
            placeholder="Recipe Name"
          />

          <input
            className="w-full bg-transparent border-b border-neutral-600 p-2 outline-none focus:border-yellow-500"
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
          />

          <textarea
            className="w-full bg-neutral-900 border border-neutral-700 rounded p-3 outline-none focus:border-yellow-500"
            {...register("desc")}
            placeholder="Description"
          />

          <textarea
            className="w-full bg-neutral-900 border border-neutral-700 rounded p-3 outline-none focus:border-yellow-500"
            {...register("ingr")}
            placeholder="Ingredients (comma separated)"
          />

          <textarea
            className="w-full bg-neutral-900 border border-neutral-700 rounded p-3 outline-none focus:border-yellow-500"
            {...register("inst")}
            placeholder="Instructions (comma separated)"
          />

          <select
            className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 outline-none focus:border-yellow-500"
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400"
            >
              Update
            </button>

            <button
              onClick={deleteHandler}
              type="button"
              className="flex-1 bg-red-900 text-red-300 py-2 rounded hover:bg-red-800"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default RecipeDetails;
