import React, { Component } from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "../styles/reset.css";
import Top from "../containers/Top";
import Sidebar from "./Sidebar";

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
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/home" component={Top} />
        </Switch>
        <Sidebar />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
