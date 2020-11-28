import React from "react";
import Burger from "../../Burger/burger";
import Button from "../../UI/Button/button";
import classes from "./CheckoutSummary.module.css";
const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope You Will Like The Taste</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btntype="Success" clicked={props.checkoutContinue}>
        CONTINUE
      </Button>
      <Button btntype="Danger" clicked={props.checkoutCancle}>
        CANCLE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
