import * as React from "react";
import ClassNames from "classnames";

import styles from "./Layout.css";

export const Side = ({ children }: any) => {
  return (
    <div className={ClassNames(styles.layout, styles.side)}>{children}</div>
  );
};

export const Main = ({ children }: any) => {
  return (
    <div className={ClassNames(styles.layout, styles.main)}>{children}</div>
  );
};
