import classNames from "classnames/bind";
import React from "react";
import bgColors from "../../../const/bgColors";
import abouts from "../../Common/About/assets";
import styles from "./About.scss";

const cx = classNames.bind(styles);

const About = () => (
  <div className={cx("container")}>
    {bgColors.map(bgColor => {
      return (
        <div
          className={cx("background")}
          style={{ background: bgColor }}
          key={bgColor}
        />
      );
    })}
    <div className={cx("title")}>
      <h1 className={cx("titleFont")}>ABOUT</h1>
    </div>
    <div className={cx("detailContainer")} id="detailContainer">
      <div className={cx("detailTitle")}>Takuya Hiraike（24）</div>
      {abouts.map(about => {
        return (
          <div className={cx("detailText")} key={about.title}>
            {about.title}
            <div className={cx("darkFont")}>{about.detail}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default About;
