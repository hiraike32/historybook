import React from "react";

import styles from "./Top.css";
import TopLogo from "./TopLogo";
import TopBackground from "./TopBackground";

const Top = () => (
  <div className={styles.container} id="container">
    <TopBackground />
    <TopLogo />
  </div>
);

export default Top;
