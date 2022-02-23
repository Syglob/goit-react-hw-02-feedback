import React from "react";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.tittle}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
