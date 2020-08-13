import React from "react";
import classes from "./menu.module.css";

export default function Menu(props) {
  return (
    <div onClick={props.openClose} className = {classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
