import React from "react";
import styles from "../../PC/About/About.module.scss";

interface About {
  title: string;
  detail: React.ReactNode;
}

const abouts: About[] = [
  {
    title: "Android / Front End Engineer",
    detail: (
      <span>
        Kotlin / Jetpack
        <br />
        HTML / CSS / TypeScript
        <br />
        React / Yarn / Storybook
        <br />
        Git / Fish
        <br />
      </span>
    ),
  },
  {
    title: "Source Code",
    detail: (
      <a href="https://github.com/hiraike32" target="_blank">
        Github
      </a>
    ),
  },
  {
    title: "Carrer",
    detail: (
      <span>
        <div className={styles.workPeriod}>2024/07~</div>
        ANDPAD / Android (Kotlin)
        <div className={styles.workPeriod}>2019/06~</div>
        Dwango / Android (Kotlin)
        <div className={styles.workPeriod}>2018/08~</div>
        Dwango / Front End (TypeScript - React)
      </span>
    ),
  },
];

export default abouts;
