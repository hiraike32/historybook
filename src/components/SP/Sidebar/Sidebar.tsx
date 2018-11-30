import anime from "animejs";
import React, { Component } from "react";

import { circleAnime } from "../../Common/Sidebar/const";
import styles from "./Sidebar.scss";
import SideMenu from "./SideMenu";

interface State {
  isOpenSidebar: boolean;
}

class Sidebar extends Component<{}, State> {
  state = {
    isOpenSidebar: false
  };

  componentDidMount() {
    const startBg = anime(circleAnime);
  }

  changeSidebar = () => {
    this.setState({ isOpenSidebar: !this.state.isOpenSidebar });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.sideIconContainer} onClick={this.changeSidebar}>
          <div id="sideIcon" className={styles.sideIcon} />
        </div>
        <SideMenu
          isOpenSidebar={!this.state.isOpenSidebar}
          changeSidebar={this.changeSidebar}
        />
      </React.Fragment>
    );
  }
}

export default Sidebar;
