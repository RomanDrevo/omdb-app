import actionsTypes from "../actionsTypes";

export const fetchItems = data =>{
  return{
    type: actionsTypes.FETCH_ITEMS,
    payload: data
  };
};

export const setItems = data =>{
  return{
    type: actionsTypes.SET_ITEMS,
    payload: data
  };
};

export const addItem = data =>{
  return{
    type: actionsTypes.ADD_ITEM,
    payload: data
  };
};

export const editItem = data =>{
  return{
    type: actionsTypes.EDIT_ITEM,
    payload: data
  };
};

export const deleteItem = data =>{
  return{
    type: actionsTypes.DELETE_ITEM,
    payload: data
  };
};

export const updateSearch = data => {
  console.log(data);
  return {
    type: actionsTypes.UPDATE_SEARCH,
    payload: data
  };
};




