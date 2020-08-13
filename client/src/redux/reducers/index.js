import { combineReducers } from "redux";

import authentication from "./auth";
import post from "./post";

const createRootReducer = () =>
  combineReducers({
    authentication,
    post,
  });

export default createRootReducer;
