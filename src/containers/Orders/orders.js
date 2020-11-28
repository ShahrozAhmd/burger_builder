import React, { Component } from "react";
import Order from "../../components/Orders/order";
import axios from "../../axios-order";
import globalErrorHandler from "../../hoc/GlobalErrorHandler/globalErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ orders: fetchedOrders });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.orders.map((item) => {
      return (
        <Order ingredients={item.ingredient} price={item.price} key={item.id} />
      );
    });
  }
}

export default globalErrorHandler(Orders, axios);
