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
      {controls.map((item) => {
        return <BuildControl 
            key={item.label} 
            label={item.label} 
            added = {()=> {props.addIngredient(item.type)}} />;
      })}
    </div>
  );
}
