import React from "react";
import classes from "./toolbar.module.css";
import Logo from "../../Logo/logo";
import NavigationItems from "../Navigation Items/navigation_items";

export default function Toolbar(props) {
  return (
    <div>
      <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
}
