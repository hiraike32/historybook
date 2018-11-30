import React from "react";

import works from "../../Common/Works/assets";
import Background from "./Background";
import styles from "./Works.scss";

const Works = () => (
  <div className={styles.container}>
    <Background />
    <h1 className={styles.pageTitle}>
      Works
      <div className={styles.pageDetail}>from time to time update</div>
    </h1>
    {works.map((work, index) => {
      return (
        <React.Fragment key={index}>
          <div className={styles.workImage}>
            <a href={work.url} target="_blank">
              <div className={styles.flame}>
                <img src={work.src} className={styles.thumbnail} />
              </div>
            </a>
          </div>
          <div className={styles.description}>
            <div className={styles.title}>{work.title}</div>
            <div className={styles.detail}>{work.detail}</div>
          </div>
        </React.Fragment>
      );
    })}
  </div>
);

export default Works;
