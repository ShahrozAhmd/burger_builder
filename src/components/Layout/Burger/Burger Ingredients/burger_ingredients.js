import React from "react";
import styles from "./burger_ingredients.module.css";

const burgerIngredients = (props) => {
  let ingredients = null;

  switch (action.type) {
    case "bread-bottom":
      ingredients = <div className={styles.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredients = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;

    case "meat":
      ingredients = <div className={styles.Meat}></div>;
      break;

    case "cheese":
      ingredients = <div className={styles.Cheese}></div>;
      break;

    case "salad":
      ingredients = <div className={styles.Salad}></div>;
      break;

    case "bacon":
      ingredients = <div className={styles.Bacon}></div>;
    default:
      ingredients = null;
  }

  return ingredients;
};
