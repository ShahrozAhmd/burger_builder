import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import burgerBuilderReducers from "./store/reducers/burger_builder_reducers";
import ordersReducers from '../src/store/reducers/order_reducers'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducers,
  orders: ordersReducers,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  
);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
