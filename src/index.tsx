import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Root from "./components/Root";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Root />
  </BrowserRouter>,
  document.getElementById("app")
);
