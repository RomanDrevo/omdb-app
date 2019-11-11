import {takeEvery} from "redux-saga/effects";
import types from '../actionsTypes'
import {fetchMovieSaga} from "../saga/sagas";

export function* watchSaga() {
  yield takeEvery(types.FETCH_MOVIE, fetchMovieSaga);
}
