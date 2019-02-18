import React from "react";
import styles from "./text.scss";

interface About {
  title: string;
  detail: React.ReactNode;
}

const abouts: About[] = [
  {
    title: "Front End Engineer",
    detail: (
      <span>
        HTML / CSS / SCSS
        <br />
        ES6+ / TypeScript
        <br />
        react / redux
        <br />
        webpack / yarn / storybook
        <br />
        git / fish / prettier
        <br />
      </span>
    )
  },
  {
    title: "Source Code",
    detail: (
      <a href="https://github.com/hiraike32" target="_blank">
        Github
      </a>
    )
  },
  {
    title: "Carrer",
    detail: (
      <span>
        <div className={styles.workPeriod}>2018年8月~</div>
        Dwango / Front End (JS - Rect)
        <div className={styles.workPeriod}>2018年6月~</div>
        Smiloops / Back End (PHP - Laravel)
        <div className={styles.workPeriod}>2017年9月~</div>
        Bravesoft / Front End (JS - jQuery)
      </span>
    )
  }
];

export default abouts;
