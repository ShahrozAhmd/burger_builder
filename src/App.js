import React, { Component } from "react";
import Layout from "./hoc/Layout/layout";
import BurgerBuilder from "./containers/BurgerBuilder/burger_builder";
import Checkout from "./containers/BurgerBuilder/Checkout/checkout";
import { BrowserRouter, Route } from "react-router-dom";
import Orders from "./containers/Orders/orders";
import Auth from './containers/Auth/auth'

class App extends Component {
  render() {
    return (
      <Layout>
        
        <Route exact path="/burger_builder" component = {BurgerBuilder} />
        <Route path = '/checkout' component = {Checkout}/>
        <Route path = '/orders' component = {Orders}/>
        <Route path = '/auth' component = {Auth}/>

      </Layout> 
    );
  }
}

export default App;
