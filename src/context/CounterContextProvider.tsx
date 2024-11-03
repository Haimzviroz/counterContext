import React, { createContext, useState, FC } from "react";

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
interface CounterContextProviderProps {
  children: React.ReactNode;
}
export const CountContext = createContext<CounterContextType | null>(null);

const counterContextProvider: FC<CounterContextProviderProps> = (props) => {
  const [count, setCounter] = useState<number>(0);
  const increment = () => setCounter(count + 1);
  const decrement = () => setCounter(count - 1);
  const reset = () => setCounter(0);

  return (
    <CountContext.Provider value={{ count, increment, decrement, reset }}>
      {props.children}
    </CountContext.Provider>
  );
};

export default counterContextProvider;
