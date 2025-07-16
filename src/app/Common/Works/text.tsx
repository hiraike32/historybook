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
    detail: <span>技術に関する記事を投稿</span>,
  },
  {
    item: "codepen",
    url: "https://codepen.io/hiraike32/",
    src: codepen,
    title: "codepen",
    detail: <span>Web で作成したデザインの投稿</span>,
  },
  {
    item: "blog",
    url: "https://hiraike32.hatenablog.com/",
    src: blog,
    title: "blog",
    detail: <span>たまにブログを書いています</span>,
  },
];

export default works;
