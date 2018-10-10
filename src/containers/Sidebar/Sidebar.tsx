import React, { Component } from "react";
import Redux from "redux";
import { connect } from "react-redux";
import anime from "animejs";

import styles from "./Sidebar.css";
import { changeSidebar } from "../../actions/Sidebar";
import SideMenu from "../../components/SideMenu";

const mapStateToProps = (state: any) => {
  return { isOpenSidebar: state.sidebarReducer.isOpenSidebar };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): any => {
  return {
    changeSidebar: (isOpenSidebar: boolean) =>
      dispatch(changeSidebar(isOpenSidebar))
  };
};

class Sidebar extends Component<any, {}> {
  constructor(props: any) {
    super(props);
  }
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

  render() {
    return (
      <div>
        <div
          className={styles.sideIconContainer}
          onClick={() => this.props.changeSidebar(!this.props.isOpenSidebar)}
        >
          <div id="sideIcon" className={styles.sideIcon} />
        </div>
        <SideMenu isOpenSidebar={!this.props.isOpenSidebar} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
