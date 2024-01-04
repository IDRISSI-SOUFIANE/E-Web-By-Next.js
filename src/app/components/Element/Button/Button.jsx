"use client";

import styles from "./button.module.css";

const Button = () => {
  return (
    <button
      className={styles.logOut}
      onClick={() => {
        console.log("logOut");
      }}
    >
      logOut
    </button>
  );
};

export default Button;
