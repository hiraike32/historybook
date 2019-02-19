import classNames from "classnames/bind";
import React from "react";
import mail from "../../Common/Contact/mail.png";
import twitter from "../../Common/Contact/twittter.png";
import Background from "./Background";
import styles from "./Contact.scss";

const cx = classNames.bind(styles);

const Contact = () => (
  <div className={cx("container")}>
    <Background />
    <h1>Contact</h1>
    <a
      href="https://twitter.com/hiraike32"
      target="_blank"
      className={cx("contact")}
    >
      <div className={cx("icon")}>
        <img src={twitter} />
      </div>
      hiraike32
    </a>
    <a href="mailto:hiraike32@gmail.com" className={cx("contact")}>
      <div className={cx("icon")}>
        <img src={mail} />
      </div>
      hiraike32@gmail.com
    </a>
  </div>
);

export default Contact;
