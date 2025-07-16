import React from "react";
import Image from "next/image";
import works from "../../Common/Works/text";
import Background from "./Background/Background";
import styles from "./Works.module.scss";

const Works = () => (
  <div className={styles.container}>
    <Background />
    <h1 className={styles.pageTitle}>Works</h1>
    {works.map((work, index) => {
      return (
        <div className={`${styles[work.item]} ${styles.work}`} key={index}>
          <a href={work.url} target="_blank">
            <div className={styles.flame}>
              <Image
                src={work.src}
                className={styles.thumbnail}
                alt={work.title}
              />
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

export default Works;
