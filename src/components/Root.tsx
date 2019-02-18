import React from "react";
import { Root as PCRoot } from "./PC";
import { Root as SPRoot } from "./SP";

import "../styles/base.scss";

const Root = () => {
  const isWide = window.innerWidth > 960;
  return <React.Fragment>{isWide ? <PCRoot /> : <SPRoot />}</React.Fragment>;
};

export default Root;
