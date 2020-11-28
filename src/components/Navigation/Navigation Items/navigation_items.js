import React from "react";
import classes from "./navitems.module.css";
import NavigationItem from './Navigation Item/navigation_item'

export default function NavigationItems() {
  return (
    
      <ul className = {classes.NavigationItems}>
          <NavigationItem link= '/burger_builder'>BURGER</NavigationItem>
          <NavigationItem link = '/orders'>ORDERS</NavigationItem>
      </ul>

  );
}
