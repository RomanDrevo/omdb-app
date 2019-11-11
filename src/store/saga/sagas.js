import { call, put } from "redux-saga/effects";
import {setErrorToStore, setLoading, setMoviesToStore} from "../actions/moviesActions";
import {fetchMovieApi} from "../../api";


export function* fetchMovieSaga(action) {
  try {

    if(action.payload){
      yield put(setLoading(true));

      const result = yield call(fetchMovieApi, action.payload);

      if(result.data.Error){
        console.log("---error: ", result.data.Error)
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
    console.log("err: ", error)
    yield put(setLoading(false));
    yield put(setErrorToStore(error));
  }
}
