import * as actionType from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  redirect: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REDIRECT:
      return {
        ...state,
        redirect: true,
      };

    case actionType.NOT_REDIRECT:
      return {
        ...state,
        redirect: false,
      };

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
        error: action.error,
      };

    case actionType.START_TO_FETCH_ORDERS:
      return {
        ...state,
        loading: true,
      };

    case actionType.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.orders,
      };

    case actionType.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
