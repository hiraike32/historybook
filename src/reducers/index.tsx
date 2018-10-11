import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import topBackgroundReducer from "./TopBackground";
import sidebarReducer from "./SideBar";

export default combineReducers({
  topBackgroundReducer,
  sidebarReducer,
  routerReducer
});
