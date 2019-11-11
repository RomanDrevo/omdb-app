import actionsTypes from '../actionsTypes'
import createReducer from '../reducers/createReducer'

const initialState = {
  data: [],
  searchText: "",
  movie: null,
  loading: false
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
      movie: null
    });
  },

  [actionsTypes.SET_ITEMS]: (state, {payload}) => {
    return {
      ...state,
      data: payload
    }
  },
  [actionsTypes.SET_MOVIE_TO_STORE]: (state, {payload}) => {
    const newData = Object.assign({}, state)
    //
    // let movie = state?.movie;
    //
    // newData.movie = payload

    return {
      ...state,
      movie: {...payload}
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

