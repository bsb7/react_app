import type { Dispatch, ReactNode } from "react";

export type ACTION =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };

export type COUNT_PROVIDER = {
  count: number;
  countDispatch: Dispatch<ACTION>;
};

export type COUNTER_PROVIDER_PROPS = {
  children: ReactNode;
};
