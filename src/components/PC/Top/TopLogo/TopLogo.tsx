import anime from "animejs";
import classNames from "classnames";
import React, { Component } from "react";

import styles from "./TopLogo.scss";

const names = ["T", "a", "k", "u", "y", "a", "/", "H", "i", "r", "i", "k", "e"];

class TopLogo extends Component<{}> {
  componentDidMount() {
    const nameTimeline = anime({
      targets: "#name span",
      opacity: [0, 0.7],
      delay(el, index) {
        return index * 200;
      }
    });
  }

  render() {
    return (
      <h1 id="name" className={styles.name}>
        {names.map((name: string, index: number) => (
          <span className={classNames(styles.letter)} key={index}>
            {name !== "/" ? name : <span>&nbsp;</span>}
          </span>
        ))}
      </h1>
    );
  }
}

export default TopLogo;
