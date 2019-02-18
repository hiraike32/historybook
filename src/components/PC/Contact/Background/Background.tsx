import ClassNames from "classnames";
import React from "react";

import styles from "./Background.scss";

const panels = [...Array(6).keys()];

const Background = () => (
  <React.Fragment>
    {/* {panels.map((panel, index) => (
      <div
        className={ClassNames(styles.panel, styles[`panel${panel}`])}
        key={index}
      />
    ))} */}
  </React.Fragment>
);

export default Background;
