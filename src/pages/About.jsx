import React from "react";

const About = () => {
  const data = [
    {
      title: "Margherita Pizza",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    },
    {
      title: "Butter Chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    },
    {
      title: "Ramen Bowl",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
      title: "Chocolate Cake",
      image:
        "https://www.bakedambrosia.com/wp-content/uploads/2023/10/Moist-Chocolate-Cake-20.jpg",
    },
    {
      title: "Caesar Salad",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
    },
    {
      title: "Pasta Alfredo",
      image: "https://images.unsplash.com/photo-1528712306091-ed0763094c98",
    },
  ];
  return (
    <div className="px-[8%] py-20 text-neutral-100 bg-neutral-950">
      <section className="max-w-3xl mb-20">
        <h1 className="text-4xl font-black mb-6">
          About Recipe<span className="text-red-400">Book</span>
        </h1>
        <p className="text-neutral-400 text-lg leading-relaxed py-3">
          RecipeBook is a simple place to discover, create, and share recipes
          without noise. No ads. No distractions. Just real food made by real
          people.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-10 mb-24 py-5">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">Quality over quantity</h3>
          <p className="text-neutral-400 text-sm">
            Every recipe exists for a reason. No copy-paste, no filler.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">Built by learners</h3>
          <p className="text-neutral-400 text-sm">
            This app is designed while learning, improving, and refining every
            step.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">Clean experience</h3>
          <p className="text-neutral-400 text-sm">
            Minimal UI, thoughtful spacing, and zero visual clutter.
          </p>
        </div>
      </section>
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-8 pb-3">
          Inspired by timeless recipes
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-neutral-400">
                  A classic that inspires many creations
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mb-24 py-2">
        <h2 className="text-2xl font-bold mb-6 pb-2">How it works</h2>

        <div className="space-y-4 text-neutral-400 pb-3">
          <p>
            Browse recipes created by others or add your own with a simple,
            clean editor.
          </p>
          <p>
            Each recipe includes clear ingredients, instructions, and a visual
            preview to help you cook with confidence.
          </p>
          <p>
            Everything is stored and managed in a structured way so the app
            stays fast, predictable, and easy to use.
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-800 pt-10 text-neutral-500 text-sm">
        <p>
          RecipeBook is a growing project built with care, curiosity, and a lot
          of debugging. It will evolve. Slowly. Properly.
        </p>
      </section>
    </div>
  );
};

export default About;
