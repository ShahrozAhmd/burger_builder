import React from "react";
import classes from './toolbar.module.css'
import Logo from "../../Logo/logo";

export default function Toolbar(props) {
  return (
    <div>
      <header className = {classes.Toolbar}>
        <div>MENU</div>
       <Logo />
        <nav>..</nav>
      </header>
    </div>
  );
}
