import anime from "animejs";
import classNames from "classnames/bind";
import React from "react";

import styles from "./Background.scss";

const cx = classNames.bind(styles);

const lines = [0, 1, 2, 3, 4, 5, 6, 7];

class Background extends React.Component<{}> {
  componentDidMount() {
    const nameTimeline = anime({
      targets: "#lines span",
      width: [0, "100vw"],
      duration: 2500,
      easing: "linear",
      direction: "alternate",
      loop: true,
      delay(el, index) {
        return index * 1200 + 500;
      }
    });
  }
  render() {
    return (
      <div className={cx("container")} id="lines">
        {lines.map((line, index) => (
          <span className={cx("border", `border${line}`)} key={index} />
        ))}
      </div>
    );
  }
}
export default Background;
