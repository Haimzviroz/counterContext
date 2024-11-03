import { useContext } from "react";
import { CountContext } from "../context/CounterContextProvider";

const FirstChiled = () => {
  const context = useContext(CountContext);
  if (!context) return null;
  const { count, increment, decrement, reset } = context;

  return (
    <div>
      <h1> count: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default FirstChiled;
