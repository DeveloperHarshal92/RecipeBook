import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import CreateRecipe from "../pages/CreateRecipe";
import RecipeDetails from "../components/RecipeDetails";
import NewHome from "../components/NewHome";
import Fav from "../pages/Fav";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<RecipeDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
      <Route path="/new-home" element={<NewHome />} />
      <Route path="fav" element={<Fav />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
