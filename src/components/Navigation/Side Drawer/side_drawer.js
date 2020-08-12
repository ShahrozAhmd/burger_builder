import React from "react";
import classes from "./side_drawer.module.css";
import Logo from "../../Logo/logo";
import NavigationItems from "../Navigation Items/navigation_items";
import Backdrop from "../../UI/Backdrop/backdrop";
import Aux from "../../../hoc/auxiliary";

export default function SideDrawer(props) {
  let condiitonalClasses = [classes.SideDrawer, classes.Close]
  if(props.open){
    condiitonalClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <Backdrop show = {props.open}  closebackdrop= {props.closed}/>
      <header className={condiitonalClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </header>
    </Aux>
  );
}
