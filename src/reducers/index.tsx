import { combineReducers } from "redux";
import topBackgroundReducer from "./TopBackground";
import sidebarReducer from "./SideBar";

export default combineReducers({ topBackgroundReducer, sidebarReducer });
