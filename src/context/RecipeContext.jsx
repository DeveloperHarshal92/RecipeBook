import { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("recipes");
      setData(stored ? JSON.parse(stored) : []);
    } catch (err) {
      console.log(err);
      setData([]);
    }
  }, []);

  return (
    <recipeContext.Provider value={{ data, setData }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

// [
//     {
//       id: "1",
//       title: "Classic Margherita Pizza",
//       chef: "Chef Mario",
//       desc: "A classic Italian pizza with tomato, mozzarella, and basil.",
//       image: "https://cdn.dummyjson.com/recipe-images/1.webp",
//       ingr: "Pizza dough, Tomato sauce, Mozzarella, Basil, Olive oil",
//       inst: "Bake, Slice, Serve",
//       category: "dinner",
//     },
//      {
//     id: "2",
//     title: "Fluffy Pancakes",
//     chef: "Chef Anna",
//     desc: "Soft and fluffy pancakes perfect for a cozy breakfast.",
//     image: "https://cdn.dummyjson.com/recipe-images/2.webp",
//     ingr: "Flour, Milk, Eggs, Sugar, Baking powder, Butter",
//     inst: "Mix ingredients, Heat pan, Pour batter, Flip, Serve",
//     category: "breakfast",
//   },
//   {
//     id: "3",
//     title: "Veggie Buddha Bowl",
//     chef: "Chef Rohan",
//     desc: "A healthy bowl packed with roasted veggies, grains, and flavor.",
//     image: "https://cdn.dummyjson.com/recipe-images/3.webp",
//     ingr: "Quinoa, Chickpeas, Sweet potato, Spinach, Olive oil, Spices",
//     inst: "Cook quinoa, Roast veggies, Assemble bowl, Add dressing",
//     category: "lunch",
//   },
//   {
//     id: "4",
//     title: "Chocolate Brownies",
//     chef: "Chef Neha",
//     desc: "Rich, fudgy chocolate brownies with a gooey center.",
//     image: "https://cdn.dummyjson.com/recipe-images/4.webp",
//     ingr: "Dark chocolate, Butter, Sugar, Eggs, Flour, Cocoa powder",
//     inst: "Melt chocolate, Mix batter, Bake, Cool, Slice",
//     category: "dessert",
//   },
//   {
//     id: "5",
//     title: "Spicy Masala Pasta",
//     chef: "Chef Arjun",
//     desc: "Indian-style pasta tossed with spicy masala and veggies.",
//     image: "https://cdn.dummyjson.com/recipe-images/5.webp",
//     ingr: "Pasta, Onion, Tomato, Capsicum, Garlic, Masala spices",
//     inst: "Boil pasta, Prepare masala, Mix together, Serve hot",
//     category: "dinner",
//   },
//   ]
