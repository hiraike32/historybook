import React, { Component } from "react";

import styles from "./Works.css";
import Text from "./assets";
import portfolio from "./assets/img/portfolio.png";

class Works extends Component<any, {}> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.flame}>
            <img src={portfolio} className={styles.thumbnail} />
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
