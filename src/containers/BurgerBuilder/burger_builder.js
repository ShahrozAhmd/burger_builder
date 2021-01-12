import React, { Component } from "react";
import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/burger";
import BuildControls from "../../components/Burger/Build Controls/build_controls";
import Modal from "../../components/UI/Modal/modal";
import OrderSummary from "../../components/Burger/Order Summary/order_summary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/spinner";
import globalErrorHandler from "../../hoc/GlobalErrorHandler/globalErrorHandler";
import Checkout from "./Checkout/checkout";
import * as actionType from "../../store/actions";
import { connect } from "react-redux";

// const INGREDIENTS_PRICES = {
//   cheese: 2,
//   salad: 1,
//   meat: 4,
//   bacon: 3,
// };

class BurgerBuilder extends Component {
  state = {
    OrderClicked: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://itsburgerapp.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  //validate if order button should be active or disable
  orderButtonValiadtor(ingredients) {
    const ingSorting = Object.keys(ingredients)
      .map((igKeys) => {
        return ingredients[igKeys];
      })
      .reduce((prev, next) => {
        return prev + next;
      }, 0);

  return ingSorting > 0 ;
  }
/*
  addIngredientsHandler = (type) => {
    //below four lines done the work to create the updated state for incremented ingredient
    const ingCount = this.state.ingredients[type];
    const updatedIngCount = ingCount + 1;
    const currIngState = { ...this.state.ingredients };
    currIngState[type] = updatedIngCount;

    //below lines are for updating the price as per ingredients added
    // const currPrice = this.state.totalPrice;
    // const newPrice = currPrice + INGREDIENTS_PRICES[type];

    //now finally we update the state
    this.setState({
      // totalPrice: newPrice,
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
    // const currPrice = this.state.totalPrice;
    // const newPrice = currPrice - INGREDIENTS_PRICES[type];

    //now finally we update the state
    this.setState({
      // totalPrice: newPrice,
      ingredients: currIngState,
    });
    //for order button  validation
    this.orderButtonValiadtor(currIngState);
  };
*/
  //for performing action when order button clicked
  orderClcikedHandler = () => {
    this.setState({ OrderClicked: true });
  };
  //for removing modal by clicking on backdorp
  removeModal = () => {
    this.setState({ OrderClicked: false });
  };

  continueOrder = () => {
    // this.setState({ loading: true });
    // const order = {
    //   ingredient: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customerData: {
    //     name: "shahroz",
    //     address: "shadman town, karachi",
    //     email: "shahrozahmed286@gmail.com",
    //   },
    // };

    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {
    //     this.setState({ loading: false, OrderClicked: false });
    //   })
    //   .catch((error) => {
    //     this.setState({ loading: false, OrderClicked: false });
    //   });

    // const queryParam = [];

    // for (let i in this.state.ingredients) {
    //   queryParam.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // }
    // const queryStr = queryParam.join("&");

    this.props.history.push({pathname: "/checkout"});
  };

  render() {
    const disableInfo = {
      ...this.props.ingFromStore,
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't load </p>
    ) : (
      <Spinner />
    );

    if (this.props.ingFromStore) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingFromStore} />
          <BuildControls
            addIngredient={this.props.onAddIngredient}
            removeIngredient={this.props.onRemoveIngredient}
            disable={disableInfo}
            price={this.props.totalPriceFromStore}
            purchasable={this.orderButtonValiadtor(this.props.ingFromStore)}
            ordered={this.orderClcikedHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingFromStore}
          cancleorder={this.removeModal}
          continueorder={this.continueOrder}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.OrderClicked} removebackdrop={this.removeModal}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingFromStore: state.ingredients,
    totalPriceFromStore: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIngredient: (ingName) =>
      dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: ingName }),
    onRemoveIngredient: (ingName) =>
      dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName: ingName }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(globalErrorHandler(BurgerBuilder, axios));
