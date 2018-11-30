import React from "react";

import TopBackground from "../../Common/Top/TopBackground";
import styles from "./Top.scss";
import TopLogo from "./TopLogo";

const Top = () => (
  <div className={styles.container} id="container">
    <TopBackground />
    <TopLogo />
  </div>
);

export default Top;
