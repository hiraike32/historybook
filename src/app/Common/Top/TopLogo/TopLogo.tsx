import React, { useEffect } from "react";
import { animate } from "animejs";

import styles from "./TopLogo.module.scss";

const names = ["h", "i", "r", "a", "i", "k", "e", "3", "2"];

const TopLogo: React.FC = () => {
  useEffect(() => {
    animate("#name span", {
      opacity: [0, 0.7],
      delay(el, index) {
        return index * 200;
      },
    });
  }, []);

  return (
    <h1 id="name" className={styles.name}>
      {names.map((name: string, index: number) => (
        <span className={styles.letter} key={index}>
          {name !== "/" ? name : <span>&nbsp;</span>}
        </span>
      ))}
    </h1>
  );
};

export default TopLogo;
