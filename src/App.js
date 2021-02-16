import React, { Component } from "react";
import Layout from "./hoc/Layout/layout";
import BurgerBuilder from "./containers/BurgerBuilder/burger_builder";
import Checkout from "./containers/BurgerBuilder/Checkout/checkout";
import { BrowserRouter, Route } from "react-router-dom";
import Orders from "./containers/Orders/orders";
import Auth from "./containers/Auth/auth";
import Logout from "./containers/Auth/Logout/logout";
import { connect } from "react-redux";
import * as action from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    console.log("app.js chal raha hai");
    this.props.onRefreshAuth(this.props.idToken);
  }
  render() {
    return (
      <Layout>
        <Route exact path="/burger_builder" component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRefreshAuth: (idToken) => dispatch(action.storeAuth(idToken)),
  };
};

const mapStateToProps = (state) => {
  return {
    idToken: state.authentication.idToken !== null,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
