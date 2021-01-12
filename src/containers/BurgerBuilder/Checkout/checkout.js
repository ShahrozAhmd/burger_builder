import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../../components/Orders/CheckoutSummary/checkoutsummary";
import ContactForm from "./Contact Form/contact-form";
import {connect} from 'react-redux';

class Checkout extends Component {


  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-form");
    // {this.props.match.path + '/contact-form'}
  };

  checkoutCancleHandler = () => {
    this.props.history.goBack();
  };

  // componentDidMount() {
  //   const queryInUrl = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   for (let params of queryInUrl.entries()) {
  //     ingredients[params[0]] = +params[1];
  //   }
  //   this.setState({ ingredients: ingredients });
  // }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingFromStore}
          checkoutCancle={this.checkoutCancleHandler}
          checkoutContinue={this.checkoutContinueHandler}
        />
        {/* load cntactfrom component here inside function coz wants to pass my own 
        props here.
        */}
        <Route
          path={this.props.match.path + "/contact-form"}
          component = {ContactForm}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingFromStore: state.ingredients,
    totalPriceFromStore: state.totalPrice,
  };
};
export default connect(mapStateToProps)(Checkout);
