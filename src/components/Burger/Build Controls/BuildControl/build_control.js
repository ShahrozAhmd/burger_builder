import React from "react";
import classes from "./build_control.module.css";

export default function BuildControl(props) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
      <button
        className={classes.Less}
        onClick={props.remove}
        disabled={props.disInfo}
      >
        Less
      </button>
    </div>
  );
}
