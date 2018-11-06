import React from "react";

import styles from "./ColumnLayout.css";

type Props = {
  children: React.ReactNode;
};

export const LeftLayout = ({ children }: Props) => (
  <div className={styles.leftContainer}>{children}</div>
);

export const RightLayout = ({ children }: Props) => (
  <div className={styles.rightContainer}>{children}</div>
);
