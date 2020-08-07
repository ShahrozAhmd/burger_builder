import React from "react";
import classes from './toolbar.module.css'

export default function Toolbar(props) {
  return (
    <div>
      <header className = {classes.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>..</nav>
      </header>
    </div>
  );
}
