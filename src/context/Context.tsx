import { createContext } from "react";
import type { THEME_CONTEXT } from "../components/ThemeToggle/ThemeTypes";
import type { COUNT_PROVIDER } from "../components/Counter/CounterTypes";

export const ThemeContext = createContext<THEME_CONTEXT | null>(null);
// export const CountContext = createContext<COUNT_PROVIDER>;
export const CountContext = createContext<COUNT_PROVIDER | null>(null);
