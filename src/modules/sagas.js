import { all } from "redux-saga/effects";
// -- start importing sagas
import { saga as main } from "./show";
// -- end importing sagas

const rootSaga = function* () {
  return yield all([
    // -- start connecting sagas
    ...main,
    // -- end connecting sagas
  ]);
};

export default rootSaga;
