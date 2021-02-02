import * as actionType from "./actionTypes";
import axios from '../../axios-order'

export const addIngredient = (ingName) => {
  return {
    type: actionType.ADD_INGREDIENT,
    ingredientName: ingName,
  };
};

export const removeIngredient = (ingName) => {
  return {
    type: actionType.REMOVE_INGREDIENT,
    ingredientName: ingName,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionType.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const gotErrorInIngredients = () =>{
    return{
        type: actionType.FETCH_INGREDIENTS_FAILED
    }
}

export const intitIngredients = () => {
  return dispatch => {
    axios
      .get("https://itsburgerapp.firebaseio.com/ingredients.json")
      .then((response) => {
       dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(gotErrorInIngredients())
      });
  };
};
