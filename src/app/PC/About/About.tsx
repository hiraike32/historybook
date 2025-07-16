import React from "react";
import bgColors from "../../../const/bgColors";
import abouts from "../../Common/About/text";
import styles from "./About.module.scss";

const About = () => (
  <div className={styles.container}>
    {bgColors.map((bgColor) => {
      return (
        <div
          className={styles.background}
          style={{ background: bgColor }}
          key={bgColor}
        />
      );
    })}
    <div className={styles.title}>
      <h1 className={styles.titleFont}>ABOUT</h1>
    </div>
    <div className={styles.detailContainer} id="detailContainer">
      <div className={styles.detailTitle}>hiraike32</div>
      {abouts.map((about) => {
        return (
          <div className={styles.detailText} key={about.title}>
            {about.title}
            <div className={styles.darkFont}>{about.detail}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default About;
