import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../../components/Orders/CheckoutSummary/checkoutsummary";
import ContactForm from "./Contact Form/contact-form";

class Checkout extends Component {
  state = {
    ingredients: {
      cheese: 1,
      meat: 1,
      bacon: 1,
      salad: 1,
    },
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-form");
    // {this.props.match.path + '/contact-form'}
  };

  checkoutCancleHandler = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    const queryInUrl = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let params of queryInUrl.entries()) {
      ingredients[params[0]] = +params[1];
    }
    this.setState({ ingredients: ingredients });
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancle={this.checkoutCancleHandler}
          checkoutContinue={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-form"}
          component={ () => <ContactForm data = {this.state.ingredients} />}
        />
      </div>
    );
  }
}

export default Checkout;
