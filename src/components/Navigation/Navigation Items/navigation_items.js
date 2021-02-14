import React from "react";
import classes from "./navitems.module.css";
import NavigationItem from "./Navigation Item/navigation_item";

export default function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/burger_builder">BURGER</NavigationItem>
      {props.isAuth ? (
        <NavigationItem link="/orders">ORDERS</NavigationItem>
      ) : null}
      {props.isAuth !== null ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
      ) : (
        <NavigationItem link="/auth">Authenticate</NavigationItem>
      )}
    </ul>
  );
}
