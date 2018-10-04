import React, { Component } from "react";
import Redux from "redux";
import { connect } from "react-redux";
import anime, { random } from "animejs";
import ClassNames from "classnames";

import styles from "./TopBackground.css";
import { initBgAnimation } from "../../actions/TopBackground";
import bgColors from "../../const/bgColors";

const mapStateToProps = (state: any) => {
  return { animes: state.topBackgroundReducer.animes };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): any => {
  return {
    initBgAnimation: (animes: string[]) => dispatch(initBgAnimation(animes))
  };
};

class TopBackground extends Component<any, {}> {
  constructor(props: any) {
    super(props);
    // 背景アニメーション用の処理
    const animes: string[] = [];
    for (let i = 0; i < 40; i++) {
      let anime = "";
      let scale = random(1, 5);
      for (let i = 0; i < random(35, 40); i++) {
        let tmpAnime = `radial-gradient(${
          bgColors[random(0, bgColors.length - 1)]
        } 30%,transparent 50%) ${random(10, 90)}% ${random(
          10,
          90
        )}% / ${scale}% ${scale}% no-repeat`;
        if (anime === "") {
          anime += tmpAnime;
        } else {
          anime += ", " + tmpAnime;
        }
      }
      animes.push(anime);
    }
    this.props.initBgAnimation(animes);
  }

  componentDidMount() {
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
        {this.props.animes.map((anime: string, index: number) => {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBackground);
