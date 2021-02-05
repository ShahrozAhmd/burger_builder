import React, { Component } from "react";
import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/burger";
import BuildControls from "../../components/Burger/Build Controls/build_controls";
import Modal from "../../components/UI/Modal/modal";
import OrderSummary from "../../components/Burger/Order Summary/order_summary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/spinner";
import globalErrorHandler from "../../hoc/GlobalErrorHandler/globalErrorHandler";
//import Checkout from "./Checkout/checkout";
import * as burgerBuilderActions from "../../store/actions/index";
import { connect } from "react-redux";

class BurgerBuilder extends Component {
  state = {
    OrderClicked: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get("https://itsburgerapp.firebaseio.com/ingredients.json")
    //   .then((response) => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: true });
    //   });
    this.props.initIngredients();
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

    return ingSorting > 0;
  }

  //for performing action when order button clicked
  orderClcikedHandler = () => {
    this.setState({ OrderClicked: true });
  };
  //for removing modal by clicking on backdorp
  removeModal = () => {
    this.setState({ OrderClicked: false });
  };

  continueOrder = () => {
    this.props.history.push({ pathname: "/checkout" });
  };

  render() {
    const disableInfo = {
      ...this.props.ingFromStore,
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.props.error ? (
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

    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

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
    errorFormStor: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIngredient: (ingName) =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onRemoveIngredient: (ingName) =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
    initIngredients: () => dispatch(burgerBuilderActions.intitIngredients()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(globalErrorHandler(BurgerBuilder, axios));
