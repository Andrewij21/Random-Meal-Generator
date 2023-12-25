import { motion } from "framer-motion";

interface GreetsProps {
  mealHandler: () => void;
}

export default function Greets({ mealHandler }: GreetsProps) {
  return (
    <motion.div
      layout
      animate={{ transition: { duration: 2 } }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 30,
      }}
      className="text-center space-y-4"
    >
      <h1 className="text-4xl">
        Feeling
        <span className="text-yellow-400"> hungry?</span>
      </h1>
      <p className="text-2xl">Get a random meal by clicking below</p>
      <button
        className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white"
        onClick={() => mealHandler()}
      >
        GET MEAL 🍔
      </button>
    </motion.div>
  );
}
