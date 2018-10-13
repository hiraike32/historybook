import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/reset.css";
import Top from "../containers/Top";
import Sidebar from "./Sidebar";

class Root extends Component<any, {}> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Top} />
        </Switch>
        <Sidebar />
      </div>
    );
  }
}

export default Root;
