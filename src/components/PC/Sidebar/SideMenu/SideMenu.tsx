import anime from "animejs";
import classNames from "classnames/bind";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menus } from "../../../Common/Sidebar/const";
import styles from "./SideMenu.scss";

const cx = classNames.bind(styles);

interface Props {
  isOpenSidebar: boolean;
  changeSidebar: () => void;
}

class SideMenu extends Component<Props, {}> {
  componentWillReceiveProps() {
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
  render() {
    const { isOpenSidebar, changeSidebar } = this.props;
    return (
      <div
        className={cx("sideMenuContainer")}
        id={isOpenSidebar ? "openSideMenu" : "closeSideMenu"}
      >
        <div className={cx("sideMenuBox")}>
          {Menus.map(menu => {
            return (
              <Link to={menu.link} key={menu.link}>
                <div
                  className={cx("sideMenu", menu.style)}
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
