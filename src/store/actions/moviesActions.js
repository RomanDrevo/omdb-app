import actionsTypes from "../actionsTypes";



export const updateSearch = data => {
  return {
    type: actionsTypes.UPDATE_SEARCH,
    payload: data
  };
};

export const clearSearch = () => {
  return {
    type: actionsTypes.CLEAR_SEARCH,
  };
};

export const fetchMovie = data =>{
  return{
    type: actionsTypes.FETCH_MOVIE,
    payload: data
  };
};


export const setMoviesToStore = data =>{
  console.log(data);
  return{
    type: actionsTypes.SET_MOVIES_TO_STORE,
    payload: data
  };
};



export const setErrorToStore = data =>{
  console.log(data);
  return{
    type: actionsTypes.SET_ERROR_TO_STORE,
    payload: data
  };
};

export const setLoading = data =>{
  return{
    type: actionsTypes.SET_LOADING,
    payload: data
  };
};
