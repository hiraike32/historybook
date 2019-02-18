import React from "react";

import "../styles/base.scss";
import { Root as PCRoot } from "./PC";
import { Root as SPRoot } from "./SP";

const Root = () => {
  const isWide = window.innerWidth > 960;
  return <React.Fragment>{isWide ? <PCRoot /> : <SPRoot />}</React.Fragment>;
};

export default Root;
