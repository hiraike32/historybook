import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import React, { Component } from "react";

import bgColors from "../../../const/bgColors";
import abouts from "../../Common/About/assets";
import styles from "./About.scss";

library.add(faTimes);

class About extends Component<{}> {
  openDetail = () => {
    const openDetailTimeline = anime.timeline();
    openDetailTimeline
      .add({
        targets: "#detailContainer",
        zIndex: 30,
        duration: 10
      })
      .add({
        targets: "#detailContainer",
        opacity: 0.9,
        easing: "easeInOutSine",
        duration: 500
      })
      .add({
        targets: "#detailContainer div",
        opacity: [0, 0.9],
        easing: "easeInOutSine",
        delay(el, index) {
          return index * 50;
        }
      });
  };

  closeDetail = () => {
    const openDetailTimeline = anime.timeline();
    openDetailTimeline
      .add({
        targets: "#detailContainer",
        opacity: 0,
        easing: "easeInOutSine"
      })
      .add({
        targets: "#detailContainer",
        zIndex: 0
      });
  };

  render() {
    return (
      <div className={styles.container}>
        {bgColors.map(bgColor => {
          return (
            <div
              className={styles.background}
              style={{ background: bgColor }}
              key={bgColor}
            />
          );
        })}
        <div className={styles.title}>
          <h1 className={styles.titleFont}>ABOUT</h1>
          <div className={styles.spButton} onClick={this.openDetail}>
            more
          </div>
        </div>
        <div className={styles.detailContainer} id="detailContainer">
          <div className={styles.detail}>
            <div onClick={this.closeDetail} className={styles.closeDetail}>
              <FontAwesomeIcon icon="times" className={styles.closeIcon} />
            </div>
            <div className={styles.detailTitle}>平池 拓也（24）</div>
            {abouts.map(about => {
              return (
                <div className={styles.detailText} key={about.title}>
                  {about.title}
                  <div className={styles.darkFont}>{about.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
