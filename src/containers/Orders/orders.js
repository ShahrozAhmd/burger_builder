import React, { Component } from "react";
import Order from "../../components/Orders/order";
import axios from "../../axios-order";
import * as orderFetchingAction from "../../store/actions/index";
import globalErrorHandler from "../../hoc/GlobalErrorHandler/globalErrorHandler";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/spinner";

class Orders extends Component {

  
  componentDidMount() {
    //fetching orders from firebase
    this.props.forFetchingOrders();
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.fetchedOrders.map((item) => {
        return (
          <Order
            ingredients={item.ingredient}
            price={item.price}
            key={item.id}
          />
        );
      });
    }
    return <>{orders}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    fetchedOrders: state.orders.orders,
    loading: state.orders.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    forFetchingOrders: () => {
      dispatch(orderFetchingAction.fetchOrders());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(globalErrorHandler(Orders, axios));
