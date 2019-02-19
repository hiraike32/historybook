import classNames from "classnames/bind";
import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { About, Contact, Sidebar, Top, Works } from ".";
import "../../styles/reset.scss";
import styles from "../../styles/transition.scss";

const cx = classNames.bind(styles);

const Root = ({ location }: any) => {
  const currentkey = "/" + location.pathname.split("/")[1];
  return (
    <React.Fragment>
      <TransitionGroup>
        <CSSTransition
          key={currentkey}
          classNames={{
            enter: cx("enter"),
            enterActive: cx("enterActive"),
            exit: cx("exit"),
            exitActive: cx("exitActive"),
            exitDone: cx("exitDone")
          }}
          timeout={3000}
        >
          <div className={cx("routeWrapper")}>
            <Switch location={location}>
              <Route exact={true} path="/" component={Top} />
              <Route path="/about" component={About} />
              <Route path="/works" component={Works} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Sidebar />
    </React.Fragment>
  );
};

export default withRouter(Root);
