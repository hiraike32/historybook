import React, { Component } from "react";
import anime from "animejs";

import styles from "./RippleCircle.css";
import { RippleCircleType } from "./RippleCircleType";

class RippleCircle extends Component<any, {}> {
  constructor(props: RippleCircleType) {
    super(props);
  }
  componentDidMount() {
    const ripple = anime({
      targets: `#rippleCircle_${this.props.circle.id}`,
      width: ["35vw", "100vw"],
      height: ["35vw", "100vw"],
      opacity: [1, 0],
      duration: 3000,
      easing: "easeInOutQuad"
    });
  }
  render() {
    return (
      <div
        className={styles.circle}
        style={{ borderColor: this.props.circle.color }}
        id={`rippleCircle_${this.props.circle.id}`}
      />
    );
  }
}

export default RippleCircle;
