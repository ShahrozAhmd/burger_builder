import React from "react";
import classes from "./order.module.css";

const Order = (props) => {
  const ingredients = [];

  for (let key in props.ingredients) {
    ingredients.push({
      ingredientName: key,
      quantity: props.ingredients[key],
    });
  }

  const ingredientsOutput = ingredients.map((item) => {
    return (
      <span 
      className = {classes.span}
      key={item.ingredientName}>
        {item.ingredientName} ({item.quantity})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>{props.price}</strong>
      </p>
    </div>
  );
};

export default Order;
