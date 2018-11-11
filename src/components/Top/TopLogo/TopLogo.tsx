import React, { Component } from "react";
import anime from "animejs";
import classNames from "classnames";

import styles from "./TopLogo.css";

const names = ["T", "a", "k", "u", "y", "a", "/", "H", "i", "r", "i", "k", "e"];

class TopLogo extends Component<{}, {}> {
  componentDidMount() {
    let nameTimeline = anime.timeline();
    nameTimeline.add({
      targets: "#name span",
      opacity: [0, 0.7],
      delay: function(el, index) {
        return index * 200;
      }
    });
  }

  render() {
    return (
      <div id="name" className={styles.name}>
        {names.map((name: string, index: number) => (
          <span className={classNames(styles.letter)} key={index}>
            {name !== "/" ? name : <span>&nbsp;</span>}
          </span>
        ))}
      </div>
    );
  }
}

export default TopLogo;
