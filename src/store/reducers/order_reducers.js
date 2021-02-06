import * as actionType from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case actionType.START_TO_PLACE_ORDER:
      return {
        ...state,
        loading: true,
      };
    case actionType.PLACE_ORDER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
      };
    case actionType.PLACE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
