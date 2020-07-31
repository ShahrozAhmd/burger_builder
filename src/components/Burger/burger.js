import React from "react";
import styles from "./burger.module.css";
import BurgerIngredients from "./Burger Ingredients/burger_ingredients";

const burger = (props) => {

  let transformedIng = Object.keys(props.ingredients).map((igKeys) => {
    return [...Array(props.ingredients[igKeys])].map((_, igIndex) => {
      return <BurgerIngredients key={igKeys + igIndex} type={igKeys} />;
    });
  }).reduce((arr,el)=>{
    return arr.concat(el);
  },[]);

  if(transformedIng.length == 0){
    transformedIng = <p>Please add some ingredients</p>
  }

  
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIng}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};
export default burger;
