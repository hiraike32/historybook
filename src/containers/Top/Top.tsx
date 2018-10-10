import React, { Component } from "react";
import Redux from "redux";
import { connect } from "react-redux";

import styles from "./Top.css";
import TopLogo from "../TopLogo";
import TopBackground from "../TopBackground";
import Sidebar from "../Sidebar";

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): any => {
  return {};
};

class Top extends Component<any, {}> {
  render() {
    return (
      <div className={styles.container} id="container">
        <TopBackground />
        <Sidebar />
        <TopLogo />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
