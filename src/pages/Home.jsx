import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router";

const Home = () => {
  const { data } = useContext(recipeContext);

  const featuredRecipes = data.slice(0, 3);
  const categories = [...new Set(data.map((r) => r.category))];

  const navigate = useNavigate();

  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center px-[8%] text-neutral-100"
        // style={{
        //   backgroundImage:
        //     "url(https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80)",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex w-full items-center">
          <div className="w-1/2 space-y-6">
            <h1 className="text-5xl font-black leading-tight">
              <span className="bg-linear-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Discover
              </span>{" "}
              recipes <br />
              crafted with{" "}
              <span className="bg-linear-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                care
              </span>
            </h1>

            <p className="text-neutral-300 max-w-md">
              Handpicked recipes from passionate chefs. Simple ingredients.
              Thoughtful cooking.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => navigate("/recipes")}
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Explore Recipes
              </button>

              <button
                onClick={() => navigate("/create-recipe")}
                className="border border-neutral-600 px-6 py-3 rounded-lg text-neutral-200 hover:bg-neutral-900 transition"
              >
                Add Your Recipe
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center relative">
            <div className="relative w-130 h-105">
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/312/833/large_2x/vegetable-salad-on-black-background-free-photo.jpg"
                alt="Salad"
                className=" absolute top-10 left-0 w-75 h-75 object-cover rounded-2xl border border-white/10 shadow-2xl z-30"
              />
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80"
                alt="Dish"
                className="absolute -top-5 -right-15 w-65 h-55 object-cover  rounded-2xl border border-white/10 shadow-xl z-20"
              />
              <img
                src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=800&q=80"
                alt="Pasta"
                className="absolute bottom-0 -right-5 w-55 h-50 object-cover rounded-2xl border  border-white/10 shadow-xl z-10 "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-[8%] py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-black">Featured Recipes</h2>
          <button className="text-sm text-neutral-400 hover:text-yellow-400">
            View all →
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  src={recipe.image}
                  alt={recipe.title}
                />
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{recipe.title}</h3>
                <p className="text-sm text-neutral-400">By {recipe.chef}</p>

                <span className="inline-block text-xs bg-neutral-800 px-2 py-1 rounded">
                  {recipe.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[8%]">
        <div className="flex gap-3 overflow-x-auto py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full border border-neutral-700 text-sm
                         hover:bg-neutral-800 hover:border-neutral-600 whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="px-[8%] grid grid-cols-3 gap-8 py-20">
        <div>
          <h3 className="font-semibold mb-2">Curated Recipes</h3>
          <p className="text-neutral-400 text-sm">
            Only quality recipes. No noise. No spam.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Real Chefs</h3>
          <p className="text-neutral-400 text-sm">
            Recipes written by people who actually cook.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Clean Experience</h3>
          <p className="text-neutral-400 text-sm">
            No clutter. No ads. Just cooking.
          </p>
        </div>
      </section>
      <footer className="border-t border-neutral-800 bg-neutral-950 px-[8%] py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <div className="text-center md:text-left">
            <p className="font-medium text-neutral-300 pb-2 ">RecipeBook</p>
            <p className="text-neutral-500">
              Simple recipes. Thoughtful cooking.
            </p>
          </div>
          <div className="flex gap-6">
            <span
              onClick={() => navigate("/home")}
              className="hover:text-neutral-300 transition cursor-default"
            >
              Home
            </span>
            <span
              onClick={() => navigate("/recipes")}
              className="hover:text-neutral-300 transition cursor-default"
            >
              Recipes
            </span>
            <span
              onClick={() => navigate("/about")}
              className="hover:text-neutral-300 transition cursor-default"
            >
              About
            </span>
          </div>
          <div className="text-center md:text-right">
            <p>© 2026 DeveloperHarsh</p>
            <p className="text-neutral-600">Built with Joy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
