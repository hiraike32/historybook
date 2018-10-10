import React, { Component } from "react";
import anime from "animejs";

import styles from "./SideMenu.css";

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
          <div className={styles.sideMenu}>About</div>
          <div className={styles.sideMenu}>Picture</div>
          <div className={styles.sideMenu}>Movie</div>
          <div className={styles.sideMenu}>Write</div>
          <div className={styles.sideMenu}>Code</div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
