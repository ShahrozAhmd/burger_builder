import * as actionType from "./actionTypes";
import axios from "../../axios-order";

export const doRedirect = () => {
  return {
    type: actionType.REDIRECT,
  };
};

export const doNotRedirect = () => {
  return {
    type: actionType.NOT_REDIRECT,
  };
};

export const startToPlaceOrder = () => {
  return {
    type: actionType.START_TO_PLACE_ORDER,
  };
};

export const placeOrderSuccess = (id, orderData) => {
  return {
    type: actionType.PLACE_ORDER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const placeOrderFail = (error) => {
  return {
    type: actionType.PLACE_ORDER_FAIL,
    error: error,
  };
};

export const placeOrder = (orderToPost) => {
  return (dispatch) => {
    dispatch(startToPlaceOrder());

    axios
      .post("/orders.json", orderToPost)
      .then((response) => {
        dispatch(placeOrderSuccess(response.data.name, orderToPost));
        dispatch(doRedirect());
        dispatch(doNotRedirect());
      })
      .catch((error) => {
        dispatch(placeOrderFail(error));
      });
  };
};
