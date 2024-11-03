import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";
import Card from "./Card";
import Header from "./Header";
import styles from "./Theme.module.css";
import { useContext } from "react";

const ThemeCompo = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme } = context;

  return (
    <div
      className={` ${styles.container} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <Header />
      <Card />
      <Button />
    </div>
  );
};

export default ThemeCompo;
