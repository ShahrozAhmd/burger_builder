import React from "react";
import classes from "./logo.module.css";
import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <div className={classes.Logo}>
      <img src={logo} />
    </div>
  );
}
