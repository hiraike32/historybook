import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../styles/reset.css";
import "../styles/base.css";
import styles from "../styles/transition.css";
import Top from "../containers/Top";
import Sidebar from "./Sidebar";
import About from "./About";

const Root = ({ location }: any) => {
  const currentkey = "/" + location.pathname.split("/")[1];
  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key={currentkey}
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
            exitDone: styles.exitDone
          }}
          timeout={3000}
        >
          <div className={styles.routeWrapper}>
            <Switch location={location}>
              <Route exact path="/" component={Top} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Sidebar />
    </div>
  );
};

export default withRouter(Root);
