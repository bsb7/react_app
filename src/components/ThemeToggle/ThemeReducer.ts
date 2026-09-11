import type { THEME_TOGGLE, THEME_ACTION } from "./ThemeTypes";

export const themeReducer = (
  theme: THEME_TOGGLE,
  action: THEME_ACTION,
): THEME_TOGGLE => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return theme === "light" ? "dark" : "light";
    default:
      return theme;
  }
};
