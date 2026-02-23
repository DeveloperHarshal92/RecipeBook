import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipeContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    toast.success("Recipe added successfully!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 px-[8%] py-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">

        <div className="mb-10">
          <h1 className="text-3xl font-black mb-2">Create Recipe</h1>
          <p className="text-neutral-400 py-2.5">
            Add a new recipe with clear ingredients and instructions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="space-y-6 bg-neutral-900 border border-neutral-800 rounded-xl p-8"
        >

          <div>
            <input
              className="w-full bg-transparent border-b border-neutral-700 p-2 outline-none focus:border-red-300"
              {...register("img", { required: "Image URL is required" })}
              type="url"
              placeholder="Recipe Image URL"
            />
            {errors.img && (
              <small className="text-red-400">{errors.img.message}</small>
            )}
          </div>

          <div>
            <input
              className="w-full bg-transparent border-b border-neutral-700 p-2 outline-none focus:border-red-300"
              {...register("title", { required: "Recipe name is required" })}
              type="text"
              placeholder="Recipe Name"
            />
            {errors.title && (
              <small className="text-red-400">{errors.title.message}</small>
            )}
          </div>

          <div>
            <input
              className="w-full bg-transparent border-b border-neutral-700 p-2 outline-none focus:border-red-300"
              {...register("chef", { required: "Chef name is required" })}
              type="text"
              placeholder="Chef Name"
            />
            {errors.chef && (
              <small className="text-red-400">{errors.chef.message}</small>
            )}
          </div>

          <div>
            <textarea
              className="w-full bg-neutral-950 border border-neutral-800 rounded p-3 outline-none focus:border-red-300"
              {...register("desc", {
                required: "Description is required",
              })}
              placeholder="Short description of the recipe"
              rows={4}
            />
            {errors.desc && (
              <small className="text-red-400">{errors.desc.message}</small>
            )}
          </div>

          <div>
            <textarea
              className="w-full bg-neutral-950 border border-neutral-800 rounded p-3 outline-none focus:border-red-300"
              {...register("ingr", {
                required: "Ingredients are required",
              })}
              placeholder="Ingredients (comma separated)"
              rows={3}
            />
            {errors.ingr && (
              <small className="text-red-400">{errors.ingr.message}</small>
            )}
          </div>

          <div>
            <textarea
              className="w-full bg-neutral-950 border border-neutral-800 rounded p-3 outline-none focus:border-red-300"
              {...register("inst", {
                required: "Instructions are required",
              })}
              placeholder="Instructions (comma separated)"
              rows={3}
            />
            {errors.inst && (
              <small className="text-red-400">{errors.inst.message}</small>
            )}
          </div>

          <div>
            <select
              className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 outline-none focus:border-red-300"
              {...register("category", {
                required: "Please select a category",
              })}
            >
              <option value="">Select Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
            </select>
            {errors.category && (
              <small className="text-red-400">
                {errors.category.message}
              </small>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-red-300 text-black font-semibold px-6 py-3 rounded-lg hover:bg-red-400 transition"
            >
              Save Recipe
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;