import React from "react";
import TopBackground from "../src/app/Common/Top/TopBackground/TopBackground";
import styles from "../src/app/Common/Top/Top.module.scss";
import TopLogo from "../src/app/Common/Top/TopLogo/TopLogo";

const Top = () => (
  <div className={styles.container} id="container">
    <TopBackground />
    <TopLogo />
  </div>
);

export default Top;
