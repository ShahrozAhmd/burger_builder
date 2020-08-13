import React from "react";
import classes from "./toolbar.module.css";
import Logo from "../../Logo/logo";
import NavigationItems from "../Navigation Items/navigation_items";
import Menu from "../Side Drawer/Menu/menu";

export default function Toolbar(props) {
  return (
    <div>
      <header className={classes.Toolbar}>
        <Menu openClose={props.menuHandler} />
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
}
