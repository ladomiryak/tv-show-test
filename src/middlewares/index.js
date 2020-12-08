import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import sagaMiddleware from "./saga";
import routerMiddleware from "./router";

const middlewares = [sagaMiddleware, routerMiddleware];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const middleware = composeWithDevTools(applyMiddleware(...middlewares));

export default middleware;
