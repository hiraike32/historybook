import React, { Component } from "react";
import anime from "animejs";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./About.css";
import bgColors from "../../const/bgColors";
import abouts from "./assets";

library.add(faTimes);

class About extends Component<any, {}> {
  // spで詳細を開く処理
  spOpenDetail = () => {
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
        delay: function(el, index) {
          return index * 50;
        }
      });
  };
  // spで詳細を閉じる処理
  spCloseDetail = () => {
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
          <div className={styles.titleFont}>ABOUT</div>
          <div className={styles.spButton} onClick={this.spOpenDetail}>
            more
          </div>
        </div>
        <div className={styles.detailContainer} id="detailContainer">
          <div className={styles.detail}>
            <div onClick={this.spCloseDetail}>
              <FontAwesomeIcon icon="times" className={styles.closeIcon} />
            </div>
            <div className={styles.detailTitle}>平池 拓也（24）</div>
            {abouts.map(about => {
              return (
                <div className={styles.detailText}>
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
