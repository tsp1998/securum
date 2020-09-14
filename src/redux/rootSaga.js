import { all, call } from "redux-saga/effects";

//sagas
import { uiSagas } from './ui/uiSagas'

export default function* rootSaga() {
  yield all([call(uiSagas)]);
}
