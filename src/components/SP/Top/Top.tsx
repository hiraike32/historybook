import classNames from "classnames/bind";
import React from "react";
import TopBackground from "../../Common/Top/TopBackground";
import styles from "./Top.scss";
import TopLogo from "./TopLogo";

const cx = classNames.bind(styles);

const Top = () => (
  <div className={cx("container")} id="container">
    <TopBackground />
    <TopLogo />
  </div>
);

export default Top;
