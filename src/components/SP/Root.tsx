import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { About, Sidebar, Top, Works } from ".";
import "../../styles/reset.scss";
import styles from "../../styles/transition.scss";

const Root = ({ location }: any) => {
  const currentkey = "/" + location.pathname.split("/")[1];
  return (
    <React.Fragment>
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
              <Route exact={true} path="/" component={Top} />
              <Route path="/about" component={About} />
              <Route path="/works" component={Works} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Sidebar />
    </React.Fragment>
  );
};

export default withRouter(Root);
