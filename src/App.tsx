import { useState } from "react";
import Greets from "./components/Greets";
import Guide from "./components/Guide";
import { AnimatePresence } from "framer-motion";

function App() {
  const [meal, setMeal] = useState({});
  const [visible, setVisible] = useState(false);

  const mealHandler = async () => {
    setVisible(false);
    await getMeal();
  };

  const getMeal = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      console.log(res);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const payload = await res.json();
      // console.log(payload.meals[0]);
      setMeal(payload.meals[0]);
      setVisible(true);
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  return (
    <main className="font-mukta  grid place-content-center min-h-screen p-16 space-y-10">
      <Greets mealHandler={mealHandler} />
      <AnimatePresence mode="popLayout">
        {visible && <Guide meal={meal} />}
      </AnimatePresence>
    </main>
  );
}

export default App;
