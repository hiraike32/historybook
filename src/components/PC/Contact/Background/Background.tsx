import ClassNames from "classnames";
import React from "react";

import styles from "./Background.scss";

const panels = [0, 1, 2, 3, 4, 5, 6];

const Background = () => (
  <React.Fragment>
    {panels.map((panel, index) => (
      <div
        className={ClassNames(styles.panel, styles[`panel${panel}`])}
        key={index}
      />
    ))}
  </React.Fragment>
);

export default Background;
