import React, { Component } from "react";
import anime from "animejs";
import classNames from "classnames";

import styles from "./SideMenu.css";
import { Link } from "react-router-dom";

class SideMenu extends Component<any, {}> {
  constructor(props: any) {
    super(props);
  }
  componentWillReceiveProps() {
    if (window.innerWidth <= 960) {
      const openSideMenu = anime({
        targets: "#openSideMenu",
        top: "0",
        opacity: "0.8",
        easing: "easeInOutQuint"
      });
      const closeSideMenu = anime({
        targets: "#closeSideMenu",
        top: "-100vh",
        opacity: "0",
        easing: "easeInOutQuart"
      });
    } else {
      const openSideMenu = anime({
        targets: "#openSideMenu",
        left: "0",
        opacity: "0.8",
        easing: "easeInOutQuint"
      });
      const closeSideMenu = anime({
        targets: "#closeSideMenu",
        left: "-20vw",
        opacity: "0",
        easing: "easeInOutQuart"
      });
    }
  }
  render() {
    return (
      <div
        className={styles.sideMenuContainer}
        id={this.props.isOpenSidebar ? "openSideMenu" : "closeSideMenu"}
      >
        <div className={styles.sideMenuBox}>
          <Link to="/">
            <div
              className={classNames(styles.sideMenu, styles.redHover)}
              onClick={() => this.props.changeSidebar(this.props.isOpenSidebar)}
            >
              HOME
            </div>
          </Link>
          <Link to="/about">
            <div
              className={classNames(styles.sideMenu, styles.greenHover)}
              onClick={() => this.props.changeSidebar(this.props.isOpenSidebar)}
            >
              ABOUT
            </div>
          </Link>
          <Link to="/works">
            <div
              className={classNames(styles.sideMenu, styles.yellowHover)}
              onClick={() => this.props.changeSidebar(this.props.isOpenSidebar)}
            >
              WORKS
            </div>
          </Link>
          <Link to="/photo">
            <div
              className={classNames(styles.sideMenu, styles.blueHover)}
              onClick={() => this.props.changeSidebar(this.props.isOpenSidebar)}
            >
              PHOTO
            </div>
          </Link>
          <Link to="/contact">
            <div
              className={classNames(styles.sideMenu, styles.orangeHover)}
              onClick={() => this.props.changeSidebar(this.props.isOpenSidebar)}
            >
              CONTACT
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideMenu;
