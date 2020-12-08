import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
  let inputElement = null;
  let inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
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
          className={inputClasses.join(" ")}
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
          className={inputClasses.join(" ")}
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
