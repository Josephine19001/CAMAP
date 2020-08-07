import { combineReducers } from "redux";

import authentication from "./auth";

const createRootReducer = () =>
  combineReducers({
    authentication,
  });

export default createRootReducer;
