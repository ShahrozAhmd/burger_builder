import React from "react";
import classes from "./navitems.module.css";
import NavigationItem from "./Navigation Item/navigation_item";

export default function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/burger_builder">Burger</NavigationItem>
      {props.isAuth ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {props.isAuth !== null ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
      ) : (
        <NavigationItem link="/auth">Authenticate</NavigationItem>
      )}
    </ul>
  );
}
