import React, { Component } from "react";
import Aux from "../../hoc/auxiliary";
import Burger from "../../components/Burger/burger";

export default class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
      </Aux>
    );
  }
}
