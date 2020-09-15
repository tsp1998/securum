import { all } from "redux-saga/effects";

export function* uiSagas() {
  yield all([
    // call(watchfetchProductsCountStart),
    // call(watchfetchProductsStart),
    // call(watchaddProductStart),
  ]);
}
