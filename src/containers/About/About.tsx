import React, { Component } from "react";
import Redux from "redux";
import { connect } from "react-redux";
import anime from "animejs";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./About.css";

library.add(faTimes);

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): any => {
  return {};
};

class About extends Component<any, {}> {
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
        {/* 左画面 */}
        <div className={styles.background} />
        <div className={styles.background} />
        <div className={styles.background} />
        <div className={styles.background} />
        <div className={styles.background} />
        <div className={styles.background} />
        <div className={styles.title}>
          <div className={styles.titleFont}>ABOUT</div>
          <div className={styles.spButton} onClick={this.spOpenDetail}>
            more
          </div>
        </div>
        {/* 右画面 */}
        <div className={styles.detailContainer} id="detailContainer">
          <div className={styles.detail}>
            <div onClick={this.spCloseDetail}>
              <FontAwesomeIcon icon="times" className={styles.closeIcon} />
            </div>
            <div className={styles.detailTitle}>平池 拓也（24）</div>
            <div className={styles.detailText}>
              Webフロントエンドエンジニア
              <div className={styles.darkFont}>
                HTML / CSS
                <br />
                React / Redux / TypeScript
                <br />
                CakePHP / Laravel / MySQL
                <br />
                Illustrator / Photoshop / AfterEffect
                <br />
                Git / Fish / VSCode
                <br />
              </div>
            </div>
            <div className={styles.detailText}>
              ソースコード
              <br />
              <a href="https://github.com/hiraike32" target="_blank">
                Github
              </a>
            </div>
            <div className={styles.detailText}>
              デジタルフォトグラファー
              <div className={styles.darkFont}>
                <a
                  href="https://www.photo-ac.com/profile/1000333"
                  target="_blank"
                >
                  写真AC
                </a>
                に素材提供
                <div className={styles.smallFont}>
                  （総ダウンロード数6,500回）
                </div>
              </div>
            </div>
            <div className={styles.detailText}>
              市民ランナー
              <div className={styles.darkFont}>
                越後湯沢秋桜ハーフマラソン
                <div className={styles.smallFont}>1時間58分59秒</div>
              </div>
            </div>
            <div className={styles.detailText}>
              経歴
              <div className={styles.darkFont}>
                <div className={styles.smallFont}>2018年8月~</div>
                株式会社ドワンゴ / 開発アルバイト
                <div className={styles.smallFont}>2018年6月~</div>
                株式会社Smiloops / 開発インターン
                <div className={styles.smallFont}>2017年9月~</div>
                株式会社ブレイブソフト / インターン
                <div className={styles.smallFont}>2016年12月~</div>
                株式会社ラントリップ / 業務委託契約
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;