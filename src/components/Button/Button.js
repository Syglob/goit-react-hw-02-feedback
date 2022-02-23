import React from "react";
import styles from "./Button.module.css";

const Button = ({ nameBtn, onLeaveFeedback }) => {
  return (
    <button
      className={styles.button}
      onClick={() => onLeaveFeedback(nameBtn)}
      type="button"
    >
      {nameBtn}
    </button>
  );
};

export default Button;
