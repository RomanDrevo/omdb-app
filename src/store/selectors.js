import { createSelector } from "reselect";
// import isEmpty from "lodash.isempty";

export const getSearchText = state => state && state.movies && state.movies.searchText;
export const getError = state => state && state.movies && state.movies.error;
export const getMovies = state => state && state.movies && state.movies.movies;
export const getLoadingStatus = state => state && state.movies && state.movies.loading;





