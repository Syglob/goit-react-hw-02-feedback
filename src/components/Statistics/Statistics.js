import React from "react";
import styles from "./Statistics.module.css";
import "./Statistics.css";
const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positive,
  positiveStyles,
}) => {
  return (
    <>
      <h2 className={styles.statsTitle}>Statistics</h2>
      {total ? (
        <div className={styles.statsWrapper}>
          <p className={styles.good}>Good: {good}</p>
          <p className={styles.neutral}>Neutral: {neutral}</p>
          <p className={styles.bad}>Bad: {bad}</p>
          <p className={styles.total}>Total: {total}</p>
          <p className={positiveStyles}>Positive: {positive}%</p>
        </div>
      ) : (
        <p className={styles.text}>No feedback given</p>
      )}
    </>
  );
};

export default Statistics;
