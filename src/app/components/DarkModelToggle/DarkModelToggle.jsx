"use client";

import { useContext } from "react";
import styles from "./DarkModelToggle.module.css";
import { ThemeContext } from "@/context/TemeContext";

const DarkModelToggle = () => {
  //   const { mode, toggle } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      //  onClick={{ toggle }}
    >
      <div className={styles.icon}>🌞</div>
      <div className={styles.icon}>🌙</div>
      <div
        className={styles.switcher}
        // style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModelToggle;
