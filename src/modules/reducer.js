import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import history from "../utils/history";
// -- start importing reducers
import { reducer as main } from "./show";

const router = connectRouter(history);

const rootReducer = combineReducers({
  router,
  // -- start connecting reducers
  main,
  // -- end connecting reducers
});

export default rootReducer;
