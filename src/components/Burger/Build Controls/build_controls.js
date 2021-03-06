import React from "react";
import classes from "./build_controls.module.css";
import BuildControl from "./BuildControl/build_control";

export default function BuildControls(props) {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
  ];

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((item) => {
        return (
          <BuildControl
            key={item.label}
            label={item.label}
            added={() => {
              props.addIngredient(item.type);
            }}
            remove={() => {
              props.removeIngredient(item.type);
            }}
            disInfo={props.disable[item.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        {props.isAuth ? "Order Now" : "Register To Order"}
      </button>
    </div>
  );
}
