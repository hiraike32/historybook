import anime, { random } from "animejs";
import classNames from "classnames/bind";
import React, { Component } from "react";

import bgColors from "../../../../const/bgColors";
import styles from "./TopBackground.scss";

const cx = classNames.bind(styles);

interface State {
  animes: string[];
}

class TopBackground extends Component<{}, State> {
  state = {
    animes: []
  };

  componentDidMount() {
    // 背景アニメーション用のcssを作成
    const animesCreate = [];
    for (let i = 0; i < 40; i++) {
      let anime = "";
      for (let i = 0; i < random(35, 40); i++) {
        const scale = random(2, 4);
        const tmpAnime = `radial-gradient(${
          bgColors[random(0, bgColors.length - 1)]
        } 30%,transparent 50%) ${random(15, 85)}% ${random(
          15,
          85
        )}% / ${scale}% ${scale}% no-repeat`;
        if (anime === "") {
          anime += tmpAnime;
        } else {
          anime += ", " + tmpAnime;
        }
      }
      animesCreate.push(anime);
    }
    this.setState({ animes: animesCreate });

    // 文字のアニメーションが完了してから背景を出す
    const startBg = anime({
      targets: "#bgContainer",
      opacity: 1,
      delay: 3000,
      duration: 3000,
      easing: "easeInOutQuart"
    });
  }

  render() {
    return (
      <div className={cx("bgContainer")} id="bgContainer">
        {this.state.animes.map((anime: string, index: number) => {
          return (
            <div
              className={cx("background", `bgRotate${random(1, 8)}`)}
              style={{
                background: anime,
                animationDelay: `-${index}s`
              }}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default TopBackground;
