import type { ACTION } from "./CounterTypes";
export const countReducer = (state: number, action: ACTION): number => {
  const { type } = action;
  // switch (action.type) {
  //   case "INCREMENT":
  //     return state + action.payload;
  //   case "DECREMENT":
  //     if (state <= 0) {
  //       return 0;
  //     }
  //     return state - action.payload;
  //   case "RESET":
  //     return 0;
  //   default:
  //     return state;
  // }
  if (type === "INCREMENT") {
    // console.log(`this is adding`);
    if (state >= 100) {
      return state;
    }
    return state + action.payload;
  }
  if (type === "DECREMENT") {
    if (state <= 0) {
      return 0;
    }
    return state - action.payload;
  }
  if (type === "RESET") {
    return 0;
  }

  return state;
};
