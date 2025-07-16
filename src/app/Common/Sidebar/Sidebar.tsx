import React, { useState, useEffect } from "react";
import { animate } from "animejs";
import styles from "./Sidebar.module.scss";
import SideMenu from "./SideMenu";

const Sidebar: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  useEffect(() => {
    animate("#sideIcon", {
      borderColor: [
        "#ff0000",
        "#0df400",
        "#ffff1e",
        "#e60aff",
        "#0afffb",
        "#f49e00",
      ],
      rotate: "4turn",
      duration: 20000,
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  const changeSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  return (
    <React.Fragment>
      <div className={styles.sideIconContainer} onClick={changeSidebar}>
        <div id="sideIcon" className={styles.sideIcon} />
      </div>
      <SideMenu isOpenSidebar={isOpenSidebar} changeSidebar={changeSidebar} />
    </React.Fragment>
  );
};

export default Sidebar;
