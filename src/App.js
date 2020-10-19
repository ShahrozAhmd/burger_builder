import React, { Component } from "react";
import Layout from "./hoc/Layout/layout";
import BurgerBuilder from "./containers/BurgerBuilder/burger_builder";

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
