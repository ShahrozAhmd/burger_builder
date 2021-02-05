import * as actionType from "./actionTypes";
import axios from "../../axios-order";

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
    axios
      .post("/orders.json", orderToPost)
      .then((response) => {
        dispatch(placeOrderSuccess(response.data, orderToPost));
      })
      .catch((error) => {
        dispatch(placeOrderFail(error));
      });
  };
};
