import React from "react";
import styles from "./layout.module.css";
import Aux from "../../hoc/auxiliary";
import Toolbar from "../Navigation/Toolbar/toolbar";
// import BurgerBuilder from "../../containers/BurgerBuilder/burger_builder";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />

      <main className={styles.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
