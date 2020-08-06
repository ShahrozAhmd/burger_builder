import React from "react";
import styles from "./layout.module.css";
import Aux from "../../hoc/auxiliary";
// import BurgerBuilder from "../../containers/BurgerBuilder/burger_builder";

const Layout = (props) => {
  return (
    <Aux>
      {/* <p>In layout.js file</p> */}

      <main className={styles.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
