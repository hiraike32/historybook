import React from "react";

import mail from "../../Common/Contact/mail.png";
import twitter from "../../Common/Contact/twittter.png";
import Background from "./Background";
import styles from "./Contact.scss";

const Contact = () => (
  <div className={styles.container}>
    <Background />
    <h1>Contact</h1>
    <a
      href="https://twitter.com/hiraike32"
      target="_blank"
      className={styles.contact}
    >
      <div className={styles.icon}>
        <img src={twitter} />
      </div>
      hiraike32
    </a>
    <a href="mailto:hiraike32@gmail.com" className={styles.contact}>
      <div className={styles.icon}>
        <img src={mail} />
      </div>
      hiraike32@gmail.com
    </a>
  </div>
);

export default Contact;
