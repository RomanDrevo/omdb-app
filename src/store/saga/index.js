import {takeEvery} from "redux-saga/effects";
import types from '../actionsTypes';
import {fetchMoviesSaga, fetchMovieDetailsSaga} from "../saga/sagas";

export function* watchSaga() {
  yield takeEvery(types.FETCH_MOVIES, fetchMoviesSaga);
  yield takeEvery(types.FETCH_MOVIE_DETAILS, fetchMovieDetailsSaga);
}
