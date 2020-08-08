import React from "react";
import classes from "./side_drawer.module.css";
import Logo from "../../Logo/logo";
import NavigationItems from "../Navigation Items/navigation_items";

export default function SideDrawer(props) {
  return (
    <div>
      <header className={classes.SideDrawer}>
        <div>MENU</div>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
}
