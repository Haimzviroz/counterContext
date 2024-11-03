import { useContext } from "react";
import styles from "./Theme.module.css";
import { ThemeContext } from "../context/ThemeContext";

const Card = () => {

  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme } = context;
  
  return <div className={styles.card}>on {theme} mode</div>;
};

export default Card;
