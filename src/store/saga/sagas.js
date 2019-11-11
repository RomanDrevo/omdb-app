import { call, put } from "redux-saga/effects";
import {setErrorToStore, setLoading, setMoviesToStore, setSelectedMovieToStore} from "../actions/moviesActions";
import {fetchMovieDetailsApi, fetchMoviesListApi} from "../../api";


export function* fetchMoviesSaga(action) {
  try {

    if(action.payload){
      yield put(setLoading(true));

      const result = yield call(fetchMoviesListApi, action.payload);

      if(result.data.Error){
        console.log("---error: ", result.data.Error);
        yield put(setErrorToStore(result.data.Error));
      }

      if(result.data.Search){
        yield put(setMoviesToStore(result.data.Search));
      }

      yield put(setLoading(false));
    }else {
      yield put(setErrorToStore("Enter movie title."));
    }

  }
  catch (error) {
    console.log("err: ", error);
    yield put(setLoading(false));
    yield put(setErrorToStore(error));
  }
}

export function* fetchMovieDetailsSaga(action) {
  try {
    yield put(setLoading(true));

    const result = yield call(fetchMovieDetailsApi, action.payload);

    if(result.data){
      yield put(setSelectedMovieToStore(result.data));
    }

    yield put(setLoading(false));

  }
  catch (error) {
    yield put(setLoading(false));
    yield put(setErrorToStore(error));
  }
}


