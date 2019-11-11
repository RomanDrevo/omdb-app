import {takeEvery} from "redux-saga/effects";
import types from '../actionsTypes'
import {fetchItems, fetchMovieSaga} from "../saga/sagas";

export function* watchSaga() {
  yield takeEvery(types.FETCH_ITEMS, fetchItems);
  yield takeEvery(types.FETCH_MOVIE, fetchMovieSaga);
}
