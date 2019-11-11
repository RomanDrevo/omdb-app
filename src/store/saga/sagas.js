import { call, put } from "redux-saga/effects";
import types from "../actionsTypes";
import {setItems, setMovieToStore} from "../actions/moviesActions";
import {fetchMovieApi} from "../../api";

let data = [
  {name: "Dan"}
];

export function* fetchItems(action) {
  try {
    // const result = yield call(fetchItemsApi, action.payload);

    yield put(setItems(data));
  } catch (error) {
    yield put({ type: types.ACTION_FAILED, payload: error.message });
  }
}

export function* fetchMovieSaga(action) {
  try {
    const result = yield call(fetchMovieApi, action.payload);

    console.log("---result: ", result)

    yield put(setMovieToStore(result.data));
  } catch (error) {
    yield put({ type: types.ACTION_FAILED, payload: error.message });
  }
}
