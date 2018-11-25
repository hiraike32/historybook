import React, { Component } from "react";
import anime, { random } from "animejs";
import ClassNames from "classnames";

import styles from "./Works.scss";
import works from "./assets";
import bgColors from "../../const/bgColors";

class Works extends Component<any, {}> {
  state = {
    animes: []
  };

  componentDidMount() {
    // 背景アニメーション用のcssを作成
    const animeCreate = [];
    let top = 0;
    let left = 0;
    let direction = 0;
    let width = 0;
    for (let i = 0; i < 15; i++) {
      if (direction === 90) {
        top += width;
        direction = 0;
        width = random(150, 250);
      } else {
        left += width;
        direction = 90;
        width = random(50, 150);
      }
      const color = bgColors[random(0, bgColors.length - 1)];
      const tmpAnime = {
        top,
        left,
        transform: `rotate(${direction}deg)`,
        color,
        width: `${width}px`
      };
      animeCreate.push(tmpAnime);
    }
    this.setState({ animes: animeCreate });
    this.startBg();
    this.startBg2();
  }

  startBg = () =>
    anime({
      targets: "#line span",
      duration: 500,
      delay: function(el, index: number) {
        return index * 500;
      },
      width: function(index: number) {
        return [0, 100];
        // return [0, this.state.anime[index].width];
      },
      easing: "linear"
    });

  // anime({
  //   targets: "span",
  //   duration: 5500,
  //   opacity: [1, 0]
  // });

  startBg2 = () =>
    anime({
      targets: "#line2",
      duration: 500,
      width: [0, 100],
      easing: "linear"
    });

  render() {
    return (
      <div className={styles.container}>
        <div id="line" className={styles.lineContainer}>
          {this.state.animes.map((anime, index) => {
            return (
              <span
                className={styles.border}
                style={anime}
                key={index}
                id={`line${index}`}
              />
            );
          })}
        </div>
        <div className={styles.pageTitle}>
          <div className={styles.pageTitleFont}>
            Works
            <div className={styles.pageDetail}>from time to time update</div>
          </div>
          <div className={styles.pageTitleCover} />
        </div>
        {works.map((work, index) => {
          return (
            <div className={styles[work.item]} key={index}>
              <a href={work.url} target="_blank">
                <div className={styles.flame}>
                  <img src={work.src} className={styles.thumbnail} />
                </div>
                <div className={styles.description}>
                  <div className={styles.title}>{work.title}</div>
                  <div className={styles.detail}>{work.detail}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Works;
