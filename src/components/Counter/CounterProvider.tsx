import { useReducer } from "react";
import { countReducer } from "./CounterReducer";
import type { COUNTER_PROVIDER_PROPS } from "./CounterTypes";
import { CountContext } from "../../context/Context";

export const CounterProvider = ({ children }: COUNTER_PROVIDER_PROPS) => {
  const [count, countDispatch] = useReducer(countReducer, 0);
  return (
    <CountContext value={{ count, countDispatch }}>{children}</CountContext>
  );
};
