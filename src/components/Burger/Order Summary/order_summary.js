import React from "react";
import Aux from "../../../hoc/auxiliary";
import Button from "../../UI/Button/button";

function OrderSummary(props) {
  let ingList = Object.keys(props.ingredients).map((igKeys) => {
    return (
      <li key={igKeys}>
        <span style={{ textTransform: "capitalize" }}>{igKeys}</span>:
        {props.ingredients[igKeys]}
      </li>
    );
  });

  return (
    <Aux>
      <h1>Your Order Summary</h1>
      <ul>{ingList}</ul>
      <p>Do you want to checkout</p>
      <Button btntype="Danger" clicked={props.cancleorder}>
        DISMISS
      </Button>
      <Button btntype="Success" clicked={props.continueorder}>
        CONTINUE
      </Button>
    </Aux>
  );
}

export default React.memo(OrderSummary);
