import { motion } from "framer-motion";

interface Meal {
  strMeal?: string;
  strCategory?: string;
  strArea?: string;
  strInstructions?: string;
  strMealThumb?: string;
  strTags?: string;
  strYoutube?: string;
}

import whiteBg from "/White_background.png";

export default function Guide({ meal }: { meal: Meal }) {
  const bahan = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}` as keyof Meal]) {
      bahan.push(
        `${meal[`strIngredient${i}` as keyof Meal]} - ${
          meal[`strMeasure${i}` as keyof Meal]
        }`
      );
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, scale: 0.9 }}
        id="guide"
        className="grid grid-cols-3 gap-4 px-12 max-h-[100rem] text-center sm:text-left"
      >
        <div className="rounded-xl overflow-clip max-h-96 col-span-3 lg:col-span-1">
          <img
            className="h-full w-full object-cover"
            src={meal.strMealThumb || whiteBg}
            alt={meal.strMeal || ""}
          />
        </div>
        <div className="space-y-2 col-span-3 lg:col-span-2">
          <h2 className="text-2xl lg:text-4xl">{meal.strMeal}</h2>
          <div className="">
            <p>Category: {meal.strCategory}</p>
            <p>Area: {meal.strArea}</p>
            <p>Tags: {meal.strTags}</p>
          </div>
          <div className="max-h-56 min-h-56 overflow-y-auto scrollbar">
            <p className="sm:tracking-wider text-left ">
              {meal.strInstructions}
            </p>
          </div>
        </div>
        <div className=" col-span-3">
          <h3 className="text-2xl mb-2">Ingredients:</h3>
          <ul className="list-disc ml-4">
            {bahan.map((i) => {
              return <li key={i}>{i}</li>;
            })}
          </ul>
        </div>
      </motion.div>
      <div className="px-12">
        <h3 className="text-2xl">Video Recipe</h3>
        <iframe
          src={`https://www.youtube.com/embed/${
            meal.strYoutube ? meal.strYoutube.slice(-11) : ""
          }`}
          className="w-full md:min-h-[50vh] lg:min-h-[100vh]"
        ></iframe>
      </div>
    </>
  );
}
