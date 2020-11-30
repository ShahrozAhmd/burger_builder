import React from "react";
import classes from "./order.module.css";

const Order = (props) => {
  const ingredients = [];

  //creating individual object of each ingredeients 
  //we have in our burger which includes its price and name
  for (let key in props.ingredients) {
    ingredients.push({
      ingredientName: key,
      quantity: props.ingredients[key],
    });
  }
// looping through all the ingredienst objects and pass them in a span to put in below tags
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
