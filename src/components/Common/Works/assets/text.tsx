import React from "react";

import blog from "./img/blog.png";
import codepen from "./img/codepen.png";
import qiita from "./img/qiita.png";

const works = [
  {
    item: "qiita",
    url: "https://qiita.com/hiraike32",
    src: qiita,
    title: "Qiita",
    detail: (
      <span>
        技術に関する記事を投稿
        <br />
        『新人プログラマをレビューで殺さない方法』
        <br />
        『コミット時にtslintとstylelintを回してコードの品質を保証する』
      </span>
    )
  },
  {
    item: "codepen",
    url: "https://codepen.io/dashboard/",
    src: codepen,
    title: "codepen",
    detail: (
      <span>
        Post some design
        <br />
        『Rotate cube』
        <br />
        『Three.js Hello World!』
      </span>
    )
  },
  {
    item: "blog",
    url: "https://hiraike32.hatenablog.com/",
    src: blog,
    title: "blog",
    detail: (
      <span>
        技術以外で考えたことなどを投稿
        <br />
        『ドワンゴでの内定者アルバイトを終えて』
        <br />
        『2019年の目標』
      </span>
    )
  }
];

export default works;
