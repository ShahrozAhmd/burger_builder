import React, { Component } from "react";
import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/burger";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 2,
      salad: 1,
      meat: 1
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients = {this.state.ingredients} />
      </Aux>
    );
  }
}
