import { useContext } from "react";
import { ThemeContext } from "../../context/Context";

const Theme = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, themeDispatch } = context;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="button-primary"
          onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
          style={{
            float: "right",
            margin: "2rem",
          }}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </>
  );
};

export default Theme;
