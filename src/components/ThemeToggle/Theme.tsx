import { useContext } from "react";
import { ThemeContext } from "../../context/Context";

const Theme = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, themeDispatch } = context;
  return (
    <>
      <button
        className="button-primary"
        onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </>
  );
};

export default Theme;
