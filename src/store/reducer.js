import * as actionType from '../store/actions'
const initialState = {
  ingredients: {
    cheese: 0,
    salad: 0,
    meat: 0,
    bacon: 0,
  },
  totalPrice: 5,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                   [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            }
        case actionType.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                   [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            }
        default: 
        return{
            ...state
        }

    }
};

export default reducer;
