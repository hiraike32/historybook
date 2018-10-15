import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/reset.css";
import "../styles/base.css";
import Top from "../containers/Top";
import Sidebar from "./Sidebar";
import About from "./About";

class Root extends Component<any, {}> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/about" component={About} />
        </Switch>
        <Sidebar />
      </div>
    );
  }
}

export default Root;
