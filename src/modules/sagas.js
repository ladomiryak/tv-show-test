import { all } from "redux-saga/effects";
// -- start importing sagas
import { saga as show } from "./show";
// -- end importing sagas

const rootSaga = function* () {
  return yield all([
    // -- start connecting sagas
    ...show,
    // -- end connecting sagas
  ]);
};

export default rootSaga;
