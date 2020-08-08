import React from "react";
import classes from "./navitems.module.css";
import NavigationItem from './Navigation Item/navigation_item'

export default function NavigationItems() {
  return (
    
      <ul className = {classes.NavigationItems}>
          <NavigationItem link= '/' active>BURGER</NavigationItem>
          <NavigationItem link = '/'>CHECKOUT</NavigationItem>
      </ul>

  );
}
