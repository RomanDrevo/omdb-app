import { createSelector } from "reselect";
// import isEmpty from "lodash.isempty";

export const getSearchText = state => state && state.movies && state.movies.searchText;
// export const getSelectedProduct = state => state && state.appStore && state.appStore.products && state.appStore.products.selectedProduct
// export const getIsAddItemFormShow = state => console.log("--state: ", state) || state && state.appStore && state.appStore.products && state.appStore.products.isAddItemFormShow





