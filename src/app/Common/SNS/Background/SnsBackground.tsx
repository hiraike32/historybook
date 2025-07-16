import React from "react";
import styles from "./SnsBackground.module.scss";

const geometries = [...Array(14).keys()];

const Background = () => (
  <>
    {geometries.map((geometory) => {
      return (
        <div
          className={`${styles.geometory} ${styles[`geometory${geometory}`]}`}
          key={`geometory${geometory}`}
        />
      );
    })}
  </>
);

export default Background;
