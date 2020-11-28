import React, { Component } from "react";
import Button from "../../../../components/UI/Button/button";
import Spinner from "../../../../components/UI/Spinner/spinner";
import classes from "./contatc-form.module.css";
import axios from "../../../../axios-order";
import Aux from "../../../../hoc/auxiliary";
import { withRouter } from "react-router-dom";

const INGREDIENTS_PRICES = {
  bacon: 3,
  cheese: 2,
  meat: 4,
  salad: 1,
};

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    address: {
      city: "",
      postalCode: "",
    },
    ingredients: null,
    loading: false,
    totalPrice: 5,
  };

  componentDidMount() {
    const length = Object.keys(this.props.data).length;
    const ing = this.props.data;
    var total = this.state.totalPrice;
    for (let item in INGREDIENTS_PRICES) {
      total += INGREDIENTS_PRICES[item] * ing[item];
    }

    this.setState({ totalPrice: total, ingredients: ing });
  }

  placeOrder = (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredient: this.state.ingredients,
      price: this.state.totalPrice,
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/burger_builder");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <Aux>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className={classes.ContactForm}>
            <form onSubmit={this.placeOrder}>
              <input name="name" type="text" placeholder="Your Name" />
              <input name="email" type="email" placeholder="Your Email" />
              <input name="name" type="text" placeholder="Your " />
              <input name="postal" type="text" placeholder="Your Postal Code" />

              <Button btntype="Success"> PLACE ORDER </Button>
            </form>
          </div>
        )}
      </Aux>
    );
  }
}

export default withRouter(ContactForm);
