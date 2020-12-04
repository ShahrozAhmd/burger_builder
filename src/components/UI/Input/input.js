import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case "select":
      let optionsFinal = props.elementConfig.options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.display}
          </option>
        );
      });

      inputElement = (
        <select
          className={classes.InputElement}
          name="delivery"
          onChange={props.changed}
        >
          {optionsFinal}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div>
      <label className={classes.Label}>{props.label.toUpperCase()}</label>
      {inputElement}
    </div>
  );
};

export default Input;
