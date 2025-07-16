import React from "react";
import twitter from "../src/app/Common/SNS/x.jpg";
import Background from "../src/app/Common/SNS/Background/SnsBackground";
import Image from "next/image";
import styles from "../src/app/Common/SNS/Sns.module.scss";

const SNS = () => (
  <div className={styles.container}>
    <Background />
    <h1>SNS</h1>
    <a
      href="https://twitter.com/hiraike32"
      target="_blank"
      className={styles.contact}
    >
      <Image src={twitter} alt="X icon" className={styles.icon} />
      hiraike32
    </a>
  </div>
);

export default SNS;
