import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import classNames from "classnames/bind";
import React, { Component } from "react";
import bgColors from "../../../const/bgColors";
import abouts from "../../Common/About/assets";
import styles from "./About.scss";

const cx = classNames.bind(styles);

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
      <div className={cx("container")}>
        {bgColors.map(bgColor => {
          return (
            <div
              className={cx("background")}
              style={{ background: bgColor }}
              key={bgColor}
            />
          );
        })}
        <div className={cx("title")}>
          <h1 className={cx("titleFont")}>ABOUT</h1>
          <div className={cx("spButton")} onClick={this.openDetail}>
            more
          </div>
        </div>
        <div className={cx("detailContainer")} id="detailContainer">
          <div className={cx("detail")}>
            <div onClick={this.closeDetail} className={cx("closeDetail")}>
              <FontAwesomeIcon icon="times" className={cx("closeIcon")} />
            </div>
            <div className={cx("detailTitle")}>Takuya Hiraike（24）</div>
            {abouts.map(about => {
              return (
                <div className={cx("detailText")} key={about.title}>
                  {about.title}
                  <div className={cx("darkFont")}>{about.detail}</div>
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
