import type { Dispatch, ReactNode } from "react";

export type THEME_TOGGLE = "light" | "dark";

export type THEME_ACTION = {
  type: "TOGGLE_THEME";
};

export type THEME_CONTEXT = {
  theme: THEME_TOGGLE;
  themeDispatch: Dispatch<THEME_ACTION>;
};

export type THEME_PROVIDER_PROPS = {
  children: ReactNode;
};
