import actionsTypes from '../actionsTypes'
import createReducer from '../reducers/createReducer'

const initialState = {
  searchText: "",
  movies: null,
  loading: false,
  error: null,
  showMovieDetails: false,
  selectedMovie: null,
  showFullDescription: false
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

    return {
      ...state,
      movies: [...payload],
      error: null
    }
  },

  [actionsTypes.SET_SELECTED_MOVIE_TO_STORE]: (state, {payload}) => {

    return {
      ...state,
      selectedMovie: {...payload},
      error: null
    }
  },

  [actionsTypes.SET_LOADING]: (state, {payload}) => {

    return {
      ...state,
      loading: payload
    }
  },

  [actionsTypes.SHOW_MOVIE_DETAILS]: (state, {payload}) => {

    return {
      ...state,
      showMovieDetails: payload
    }
  },

  [actionsTypes.SHOW_FULL_DESCRIPTION]: (state, {payload}) => {

    return {
      ...state,
      showFullDescription: payload
    }
  },
});

export default headerReducer;

