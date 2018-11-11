import React, { Component } from "react";
import anime from "animejs";

import styles from "./Sidebar.css";
import SideMenu from "./SideMenu";

type State = {
  isOpenSidebar: boolean;
};

class Sidebar extends Component<{}, State> {
  state = {
    isOpenSidebar: false
  };

  componentDidMount() {
    const startBg = anime({
      targets: "#sideIcon",
      borderColor: [
        { value: "#ff0000" },
        { value: "#0df400" },
        { value: "#ffff1e" },
        { value: "#e60aff" },
        { value: "#0afffb" },
        { value: "#f49e00" }
      ],
      rotate: {
        value: "4turn",
        duration: 20000,
        easing: "easeInOutSine"
      },
      duration: 20000,
      loop: true
    });
  }

  changeSidebar = () => {
    this.setState({ isOpenSidebar: !this.state.isOpenSidebar });
  };

  render() {
    return (
      <div>
        <div className={styles.sideIconContainer} onClick={this.changeSidebar}>
          <div id="sideIcon" className={styles.sideIcon} />
        </div>
        <SideMenu
          isOpenSidebar={!this.state.isOpenSidebar}
          changeSidebar={this.changeSidebar}
        />
      </div>
    );
  }
}

export default Sidebar;
