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

export const placeOrder = (orderToPost,idToken) => {
  return (dispatch) => {
    dispatch(startToPlaceOrder());

    axios
      .post("/orders.json?auth="+ idToken, orderToPost)
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

export const fetchOrderStart = () => {
  return {
    type: actionType.START_TO_FETCH_ORDERS,
  };
};

export const fetchOrderSuccess = (orders) => {
  return {
    type: actionType.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrderFailed = (error) => {
  return {
    type: actionType.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrders = (idToken) => {
  return (dispatch) => {
    dispatch(fetchOrderStart());
    axios
      .get("/orders.json?auth="+idToken)
      .then((res) => {
        const fetchedOrders = [];
        // through the rough data we get from api and also assing the id to all orders
        for (const key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrderSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrderFailed(err));
      });
  };
};
