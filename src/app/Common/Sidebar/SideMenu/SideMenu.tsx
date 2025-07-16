import { animate } from "animejs";
import React from "react";
import Link from "next/link";
import { Menus } from "../const";
import styles from "./SideMenu.module.scss";

interface Props {
  isOpenSidebar: boolean;
  changeSidebar: () => void;
}

const SideMenu: React.FC<Props> = ({ isOpenSidebar, changeSidebar }) => {
  const openSideMenu = () => {
    animate("#openSideMenu", {
      left: "0",
      opacity: "0.8",
      easing: "easeInOutQuint",
    });
  };

  const closeSideMenu = () => {
    animate("#closeSideMenu", {
      left: "-20vw",
      opacity: "0",
      easing: "easeInOutQuart",
    });
  };

  React.useEffect(() => {
    if (isOpenSidebar) {
      openSideMenu();
    } else {
      closeSideMenu();
    }
  }, [isOpenSidebar]);

  return (
    <div
      className={styles.sideMenuContainer}
      id={isOpenSidebar ? "openSideMenu" : "closeSideMenu"}
    >
      <div className={styles.sideMenuBox}>
        {Menus.map((menu) => {
          return (
            <Link href={menu.link} key={menu.link}>
              <div className={styles.sideMenu} onClick={() => changeSidebar()}>
                {menu.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
