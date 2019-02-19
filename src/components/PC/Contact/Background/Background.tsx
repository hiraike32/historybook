import classNames from "classnames/bind";
import React from "react";
import styles from "./Background.scss";

const cx = classNames.bind(styles);

const geometries = [...Array(14).keys()];

const Background = () => (
  <>
    {geometries.map(geometory => {
      return (
        <div
          className={cx("geometory", `geometory${geometory}`)}
          key={`geometory${geometory}`}
        />
      );
    })}
  </>
);

export default Background;
