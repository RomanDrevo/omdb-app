import actionsTypes from '../actionsTypes'
import createReducer from '../reducers/createReducer'

const initialState = {
  data: [],
  searchText: ""
};

const headerReducer = createReducer(initialState, {

  [actionsTypes.UPDATE_SEARCH]: (state, { payload }) => {
    return Object.assign({}, state, {
      searchText: payload
    });
  },

  [actionsTypes.CLEAR_SEARCH]: state => {
    return Object.assign({}, state, {
      searchText: ""
    });
  },

  [actionsTypes.SET_ITEMS]: (state, {payload}) => {
    return {
      ...state,
      data: payload
    }
  },
  [actionsTypes.ADD_ITEM]: (state, {payload}) => {
    const newData = [...state.data].push(payload);
    return {
      ...state,
      data: newData
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

