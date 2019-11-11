import actionsTypes from '../actionsTypes'
import createReducer from '../reducers/createReducer'

const initialState = {
  data: [],
  searchText: "",
  movies: null,
  loading: false,
  error: null
};

const headerReducer = createReducer(initialState, {

  [actionsTypes.UPDATE_SEARCH]: (state, { payload }) => {
    return Object.assign({}, state, {
      searchText: payload
    });
  },

  [actionsTypes.CLEAR_SEARCH]: state => {
    return Object.assign({}, state, {
      searchText: "",
      movies: null
    });
  },

  [actionsTypes.SET_ERROR_TO_STORE]: (state, {payload}) => {
    return {
      ...state,
      error: payload,
      movies: null
    }
  },
  [actionsTypes.SET_MOVIES_TO_STORE]: (state, {payload}) => {

    console.log("--payload: ", payload)
    //
    // let movie = state?.movie;
    //
    // newData.movie = payload

    return {
      ...state,
      movies: [...payload],
      error: null
    }
  },
  [actionsTypes.EDIT_ITEM]: (state, {payload}) => {
    /*const newData = [...state.data].push(payload);
    return {
      ...state,
      data: newData
    }*/
  },
  [actionsTypes.DELETE_ITEM]: (state, {payload}) => {
    /*const newData = [...state.data].push(payload);
    return {
      ...state,
      data: newData
    }*/
  }
});

export default headerReducer;

