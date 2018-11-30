import React from "react";

import note from "./img/note.jpg";
import portfolio from "./img/portfolio.png";
import qiita from "./img/qiita.png";

const works = [
  {
    item: "portfolio",
    url: "https://hiraike32.github.io/portfolio/",
    src: portfolio,
    title: "Portfolio",
    detail: (
      <span>
        2017年に自作したポートフォリオサイト。
        <br />
        エンジニアを目指すための第一歩となった。
      </span>
    )
  },
  {
    item: "qiita",
    url: "https://qiita.com/hiraike32",
    src: qiita,
    title: "Qiita",
    detail: (
      <span>
        少しずつ技術記事を執筆
        <br />
        ・dwango.co.jpのモバイルページをReactでデザインから作り直してみた。
        <br />
        ・【初心者歓迎】bashからfishに切り替えて快適なターミナル環境を構築しよう
      </span>
    )
  },
  {
    item: "note",
    url: "https://note.mu/hiraike32",
    src: note,
    title: "note",
    detail: (
      <span>
        思ったことを自由に記載
        <br />
        ・劣等感は最高だ。 〜卒論にかえて〜
        <br />
        ・エンジニアインターン生の幸と不幸
      </span>
    )
  }
];

export default works;
