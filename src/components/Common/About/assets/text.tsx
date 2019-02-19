import className from "classnames/bind";
import React from "react";
import styles from "./text.scss";

const cx = className.bind(styles);

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
        <div className={cx("workPeriod")}>2018/08~</div>
        Dwango / Front End (JS - React)
        <div className={cx("workPeriod")}>2018/06~</div>
        Smiloops / Back End (PHP - Laravel)
        <div className={cx("workPeriod")}>2017/09~</div>
        Bravesoft / Front End (JS - jQuery)
      </span>
    )
  }
];

export default abouts;
