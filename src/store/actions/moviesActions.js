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

export const fetchMovies = data =>{
  return{
    type: actionsTypes.FETCH_MOVIES,
    payload: data
  };
};


export const setMoviesToStore = data =>{
  return{
    type: actionsTypes.SET_MOVIES_TO_STORE,
    payload: data
  };
};



export const setErrorToStore = data =>{
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

export const showMovieDetails = data =>{
  return{
    type: actionsTypes.SHOW_MOVIE_DETAILS,
    payload: data
  };
};


export const setSelectedMovieToStore = data =>{
  return{
    type: actionsTypes.SET_SELECTED_MOVIE_TO_STORE,
    payload: data
  };
};

export const fetchMovieDetails = data =>{
  return{
    type: actionsTypes.FETCH_MOVIE_DETAILS,
    payload: data
  };
};

export const showFullDescription = data =>{
  return{
    type: actionsTypes.SHOW_FULL_DESCRIPTION,
    payload: data
  };
};

