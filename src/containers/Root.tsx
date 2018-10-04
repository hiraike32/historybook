import React, { Component } from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import "../styles/reset.css";
import Top from "../containers/Top";

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): any => {
  return {};
};

class Root extends Component<any, {}> {
  render() {
    return (
      <div>
        <Top />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
