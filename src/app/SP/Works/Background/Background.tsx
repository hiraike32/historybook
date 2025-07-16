import React, { useEffect } from "react";
import { animate } from "animejs";
import styles from "./Background.module.scss";

const lines = [0, 1, 2, 3, 4, 5, 6, 7];

const Background: React.FC = () => {
  useEffect(() => {
    animate("#lines span", {
      width: [0, "110vh"],
      duration: 2000,
      easing: "linear",
      direction: "alternate",
      loop: true,
      delay(el, index) {
        return index * 1000 + 500;
      },
    });
  }, []);

  return (
    <div className={styles.container} id="lines">
      {lines.map((line, index) => (
        <span
          className={`${styles.border} ${styles[`border${line}`]}`}
          key={index}
        />
      ))}
    </div>
  );
};

export default Background;
