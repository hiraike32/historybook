import React, { Component } from "react";
import anime from "animejs";

import styles from "./SideMenu.css";
import { Link } from "react-router-dom";

class SideMenu extends Component<any, {}> {
  constructor(props: any) {
    super(props);
  }
  componentWillReceiveProps() {
    const openSideMenu = anime({
      targets: "#openSideMenu",
      left: "0",
      easing: "easeInOutQuint"
    });
    const closeSideMenu = anime({
      targets: "#closeSideMenu",
      left: "-17vw",
      easing: "easeInOutQuart"
    });
  }
  render() {
    return (
      <div
        className={styles.sideMenuContainer}
        id={this.props.isOpenSidebar ? "openSideMenu" : "closeSideMenu"}
      >
        <div className={styles.sideMenuBox}>
          <Link to="/">
            <div className={styles.sideMenu}>HOME</div>
          </Link>
          <Link to="/about">
            <div className={styles.sideMenu}>ABOUT</div>
          </Link>
          <Link to="/works">
            <div className={styles.sideMenu}>WORKS</div>
          </Link>
          <Link to="/photo">
            <div className={styles.sideMenu}>PHOTO</div>
          </Link>
          <Link to="/contact">
            <div className={styles.sideMenu}>CONTACT</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideMenu;
