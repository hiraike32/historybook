import React, { Component } from "react";
import anime from "animejs";
import classNames from "classnames";

import styles from "./SideMenu.css";
import { Link } from "react-router-dom";

const Links = [
  {
    link: "/",
    style: "redHover",
    name: "HOME"
  },
  {
    link: "/about",
    style: "greenHover",
    name: "ABOUT"
  },
  {
    link: "/works",
    style: "blueHover",
    name: "WORKS"
  },
  {
    link: "/contact",
    style: "orangeHover",
    name: "CONTACT"
  }
];

type Props = {
  isOpenSidebar: boolean;
  changeSidebar: () => void;
};

class SideMenu extends Component<any, {}> {
  componentWillReceiveProps() {
    // spでのサイドメニュー
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
    } // pcでのサイドメニュー
    else {
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
    const { isOpenSidebar } = this.props;
    return (
      <div
        className={styles.sideMenuContainer}
        id={isOpenSidebar ? "openSideMenu" : "closeSideMenu"}
      >
        <div className={styles.sideMenuBox}>
          {Links.map(link => {
            return (
              <Link to={link.link}>
                <div
                  className={classNames(styles.sideMenu, styles[link.style])}
                  onClick={() => this.props.changeSidebar()}
                >
                  {link.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SideMenu;
