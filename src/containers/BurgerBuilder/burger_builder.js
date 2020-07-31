import React, { Component } from "react";
import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/burger";
import BuildControls from "../../components/Burger/Build Controls/build_controls";

const INGREDIENTS_PRICES = {
  cheese: 0.5,
  salad: 0.4,
  meat: 0.8,
  bacon: 0.6,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      meat: 0,
      bacon: 0,
    },
    totalPrice: 5,
  };

  addIngredientsHandler = (type) => {
    //below four lines done the work to create the updated state for incremented ingredient
    const ingCount = this.state.ingredients[type];
    const updatedIngCount = ingCount + 1;
    const currIngState = { ...this.state.ingredients };
    currIngState[type] = updatedIngCount;

    //below lines are for updating the price as per ingredients added
    const currPrice = this.state.totalPrice;
    const newPrice = INGREDIENTS_PRICES[type] * updatedIngCount;

    //now finally we update the state
    this.setState({
      totalPrice: newPrice,
      ingredients: currIngState,
    });
  };

  removeIngredientsHandler = (type) => {
    //below four lines done the work to create the updated state for removing ingredient
    const ingCount = this.state.ingredients[type];
    const updatedIngCount = ingCount - 1;
    const currIngState = { ...this.state.ingredients };
    currIngState[type] = updatedIngCount;

    //below lines are for updating the price as per ingredients added
    const currPrice = this.state.totalPrice;
    const newPrice = INGREDIENTS_PRICES[type] * updatedIngCount;

    //now finally we update the state
    this.setState({
      totalPrice: newPrice,
      ingredients: currIngState,
    });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientsHandler}
          removeIngredient={this.removeIngredientsHandler}
          disable={disableInfo}
        />
      </Aux>
    );
  }
}
