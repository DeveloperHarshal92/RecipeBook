import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="h-16 px-[6%] flex items-center justify-between">
        <div className="text-xl font-black tracking-tight text-white">
          Recipe<span className="text-red-300">Book</span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-neutral-300">
          <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/">
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-300" : "")}
            to="/recipes"
          >
            Recipes
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-300" : "")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-300" : "")}
            to="/create-recipe"
          >
            Create Recipe
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-300" : "")}
            to="/fav"
          >
            Favorite
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm text-neutral-400 hover:text-white transition">
            Login
          </button>

          <button className="bg-red-300 text-black text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-400 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
