import React, { Component } from "react";
import Layout from "./components/Layout/layout";
import BurgerBuilder from "./components/BurgerBuilder/burger_builder";

class App extends Component {
  render() {
    return (
      <Layout>
          <BurgerBuilder/>
      </Layout>

    );
  }
}

export default App;
