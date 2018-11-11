import React, { Component } from "react";
import anime, { random } from "animejs";
import ClassNames from "classnames";

import styles from "./TopBackground.css";
import bgColors from "../../const/bgColors";

type State = {
  animes: string[];
};

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
        let scale = random(1, 5);
        let tmpAnime = `radial-gradient(${
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
      <div className={styles.bgContainer} id="bgContainer">
        {this.state.animes.map((anime: string, index: number) => {
          return (
            <div
              className={ClassNames(
                styles.background,
                styles[`bgRotate${random(1, 6)}`]
              )}
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
