import classNames from "classnames/bind";
import React from "react";
import works from "../../Common/Works/assets";
import Background from "./Background";
import styles from "./Works.scss";

const cx = classNames.bind(styles);

const Works = () => (
  <div className={cx("container")}>
    <Background />
    <h1 className={cx("pageTitle")}>
      Works
      <div className={cx("pageDetail")}>from time to time update</div>
    </h1>
    {works.map((work, index) => {
      return (
        <React.Fragment key={index}>
          <div className={cx("workImage")}>
            <a href={work.url} target="_blank">
              <div className={cx("flame")}>
                <img src={work.src} className={cx("thumbnail")} />
              </div>
            </a>
          </div>
          <div className={cx("description")}>
            <div className={cx("title")}>{work.title}</div>
            <div className={cx("detail")}>{work.detail}</div>
          </div>
        </React.Fragment>
      );
    })}
  </div>
);

export default Works;
