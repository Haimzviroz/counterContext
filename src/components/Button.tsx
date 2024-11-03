import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { toggleTheme, theme } = context;

  return (
    <button onClick={toggleTheme}>
      change to {theme === "dark" ? "light" : "dark"}
    </button>
  );
};

export default Button;
