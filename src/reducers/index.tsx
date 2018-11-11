import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import sidebarReducer from "./SideBar";

export default combineReducers({
  sidebarReducer,
  routerReducer
});
