import React, { Component } from "react";

import styles from "./Works.css";
import works from "./assets";

class Works extends Component<any, {}> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.pageTitle}>
          Works<div className={styles.pageDetail}>from time to time update</div>
        </div>
        {works.map(work => {
          return (
            <div className={styles[work.item]}>
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
