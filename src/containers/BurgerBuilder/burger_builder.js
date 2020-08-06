import React, { Component } from "react";
import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/burger";
import BuildControls from "../../components/Burger/Build Controls/build_controls";
import Modal from "../../components/UI/Modal/modal";
import OrderSummary from "../../components/Burger/Order Summary/order_summary";

const INGREDIENTS_PRICES = {
  cheese: 2,
  salad: 1,
  meat: 4,
  bacon: 3,
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
    isPurchasable: false,
  };

  //validate if order button should be active or disable
  orderButtonValiadtor(ingredients) {
    const ingSorting = Object.keys(ingredients)
      .map((igKeys) => {
        return ingredients[igKeys];
      })
      .reduce((prev, next) => {
        return prev + next;
      }, 0);

    this.setState({
      isPurchasable: ingSorting > 0,
    });
  }

  addIngredientsHandler = (type) => {
    //below four lines done the work to create the updated state for incremented ingredient
    const ingCount = this.state.ingredients[type];
    const updatedIngCount = ingCount + 1;
    const currIngState = { ...this.state.ingredients };
    currIngState[type] = updatedIngCount;

    //below lines are for updating the price as per ingredients added
    const currPrice = this.state.totalPrice;
    const newPrice = currPrice + INGREDIENTS_PRICES[type];

    //now finally we update the state
    this.setState({
      totalPrice: newPrice,
      ingredients: currIngState,
    });

    //for order button  validation
    this.orderButtonValiadtor(currIngState);
  };

  removeIngredientsHandler = (type) => {
    //below four lines done the work to create the updated state for removing ingredient
    const ingCount = this.state.ingredients[type];
    const updatedIngCount = ingCount - 1;
    const currIngState = { ...this.state.ingredients };
    currIngState[type] = updatedIngCount;

    //below lines are for updating the price as per ingredients added
    const currPrice = this.state.totalPrice;
    const newPrice = currPrice - INGREDIENTS_PRICES[type];

    //now finally we update the state
    this.setState({
      totalPrice: newPrice,
      ingredients: currIngState,
    });
    //for order button  validation
    this.orderButtonValiadtor(currIngState);
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
        <Modal> 
          <OrderSummary ingredients = {this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientsHandler}
          removeIngredient={this.removeIngredientsHandler}
          disable={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.isPurchasable}
        />
      </Aux>
    );
  }
}
