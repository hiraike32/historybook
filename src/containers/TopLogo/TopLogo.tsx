import React, { Component } from "react";
import Redux from "redux";
import { connect } from "react-redux";
import anime, { random } from "animejs";
import classNames from "classnames";

import styles from "./TopLogo.css";

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): any => {
  return {};
};

class TopLogo extends Component<any, { clickId: number; closeId: number }> {
  constructor(props: any) {
    super(props);
  }

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
        <span className={classNames(styles.letter)}>T</span>
        <span className={classNames(styles.letter)}>a</span>
        <span className={classNames(styles.letter)}>k</span>
        <span className={classNames(styles.letter)}>u</span>
        <span className={classNames(styles.letter)}>y</span>
        <span className={classNames(styles.letter)}>a</span>
        <span className={classNames(styles.letter)}> </span>
        <span className={classNames(styles.letter)}>H</span>
        <span className={classNames(styles.letter)}>i</span>
        <span className={classNames(styles.letter)}>r</span>
        <span className={classNames(styles.letter)}>a</span>
        <span className={classNames(styles.letter)}>i</span>
        <span className={classNames(styles.letter)}>k</span>
        <span className={classNames(styles.letter)}>e</span>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopLogo);
