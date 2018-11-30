import anime from "animejs";
import ClassNames from "classnames";
import React from "react";

import styles from "./Background.scss";

const lines = [0, 1, 2, 3, 4, 5, 6, 7];

class Background extends React.Component<{}> {
  componentDidMount() {
    const nameTimeline = anime({
      targets: "#lines span",
      width: [0, "110vh"],
      duration: 2000,
      easing: "linear",
      direction: "alternate",
      loop: true,
      delay(el, index) {
        return index * 1000 + 500;
      }
    });
  }
  render() {
    return (
      <div className={styles.container} id="lines">
        {lines.map((line, index) => (
          <span
            className={ClassNames(styles.border, styles[`border${line}`])}
            key={index}
          />
        ))}
      </div>
    );
  }
}
export default Background;
