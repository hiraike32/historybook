import React, { Component } from "react";

import styles from "./Works.css";
import Text from "./assets";

class Works extends Component<any, {}> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.workDetail}>
            {Text.map(media => (
              <div>
                <div>{media.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.workDetail} />
        </div>
      </div>
    );
  }
}

export default Works;
