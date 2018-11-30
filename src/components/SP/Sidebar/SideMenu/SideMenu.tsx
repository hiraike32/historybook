import anime from "animejs";
import classNames from "classnames";
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Menus } from "../../../Common/Sidebar/const";
import styles from "./SideMenu.scss";

interface Props {
  isOpenSidebar: boolean;
  changeSidebar: () => void;
}

class SideMenu extends Component<Props, {}> {
  componentWillReceiveProps() {
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
  }
  render() {
    const { isOpenSidebar, changeSidebar } = this.props;
    return (
      <div
        className={styles.sideMenuContainer}
        id={isOpenSidebar ? "openSideMenu" : "closeSideMenu"}
      >
        <div className={styles.sideMenuBox}>
          {Menus.map(menu => {
            return (
              <Link to={menu.link} key={menu.link}>
                <div
                  className={classNames(styles.sideMenu, styles[menu.style])}
                  onClick={() => changeSidebar()}
                >
                  {menu.name}
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
