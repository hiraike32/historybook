import { animate } from "animejs";
import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgColors from "../../../const/bgColors";
import abouts from "../../Common/About/text";
import styles from "./About.module.scss";

const About: React.FC = () => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const openDetail = () => {
    setIsDetailVisible(true);
  };

  const closeDetail = () => {
    animate("#detailContainer", {
      opacity: [1, 0],
      y: [0, window.innerHeight],
      duration: 1000,
      easing: "easeInOutQuad",
      complete: () => {
        setIsDetailVisible(false);
      },
    });
  };

  useEffect(() => {
    if (isDetailVisible) {
      animate("#detailContainer", {
        opacity: [0, 1],
        y: [window.innerHeight, 0],
        duration: 1000,
        easing: "easeInOut",
      });
    }
  }, [isDetailVisible]);

  library.add(faTimes);

  return (
    <div className={styles.container}>
      {bgColors.map((bgColor) => {
        return (
          <div
            className={styles.background}
            style={{ background: bgColor }}
            key={bgColor}
          />
        );
      })}
      <div className={styles.title}>
        <h1 className={styles.titleFont}>ABOUT</h1>
        <div className={styles.spButton} onClick={openDetail}>
          more
        </div>
      </div>

      <div className={styles.detailContainer} id="detailContainer">
        <div className={styles.detail}>
          <div onClick={closeDetail} className={styles.closeDetail}>
            <FontAwesomeIcon icon="times" className={styles.closeIcon} />
          </div>
          <div className={styles.detailTitle}>hiraike32</div>
          {abouts.map((about) => {
            return (
              <div className={styles.detailText} key={about.title}>
                {about.title}
                <div className={styles.darkFont}>{about.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
