import React from "react";
import styles from "./text.scss";

interface About {
  title: string;
  detail: React.ReactNode;
}

const abouts: About[] = [
  {
    title: "Webフロントエンドエンジニア",
    detail: (
      <span>
        HTML / CSS / SCSS
        <br />
        ES6+ / TypeScript
        <br />
        React / Redux / Bootstrap
        <br />
        Webpack / yarn / Storybook
        <br />
        Git / Fish / Prettier
        <br />
      </span>
    )
  },
  {
    title: "ソースコード",
    detail: (
      <a href="https://github.com/hiraike32" target="_blank">
        Github
      </a>
    )
  },
  {
    title: "デジタルフォトグラファー",
    detail: (
      <span>
        <a href="https://www.photo-ac.com/profile/1000333" target="_blank">
          写真AC
        </a>
        に素材提供
        <div className={styles.smallFont}>（総ダウンロード数6,500回）</div>
      </span>
    )
  },
  {
    title: "市民ランナー",
    detail: (
      <span>
        越後湯沢秋桜ハーフマラソン
        <div className={styles.smallFont}>1時間58分59秒</div>
      </span>
    )
  },
  {
    title: "経歴",
    detail: (
      <span>
        <div className={styles.workPeriod}>2018年8月~</div>
        株式会社ドワンゴ / 開発アルバイト
        <div className={styles.workPeriod}>2018年6月~</div>
        株式会社Smiloops / 開発インターン
        <div className={styles.workPeriod}>2017年9月~</div>
        株式会社ブレイブソフト / インターン
        <div className={styles.workPeriod}>2016年12月~</div>
        株式会社ラントリップ / 業務委託契約
      </span>
    )
  }
];

export default abouts;
