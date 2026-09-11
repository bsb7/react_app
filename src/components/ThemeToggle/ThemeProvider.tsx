import { useReducer } from "react";
import { ThemeContext } from "../../context/Context";
import { themeReducer } from "./ThemeReducer";
import type { THEME_PROVIDER_PROPS } from "./ThemeTypes";

export const ThemeProvider = ({ children }: THEME_PROVIDER_PROPS) => {
  const [theme, themeDispatch] = useReducer(themeReducer, "light");
  return (
    <ThemeContext.Provider value={{ theme, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
