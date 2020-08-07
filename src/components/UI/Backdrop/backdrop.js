import React from "react";
import classes from "./backdrop.module.css";

export default function Backdrop(props) {
  return props.show ? (
    <div className={classes.backdrop} onClick={props.closebackdrop}></div>
  ) : null;
}
