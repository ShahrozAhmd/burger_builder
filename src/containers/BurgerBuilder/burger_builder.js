import React, { Component } from "react";
import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/burger";
import BuildControls from "../../components/Burger/Build Controls/build_controls";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      meat: 0
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients = {this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}
