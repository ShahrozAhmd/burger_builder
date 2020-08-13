import React, { Component } from "react";
import classes from "./layout.module.css";
import Aux from "../auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/toolbar";
import SideDrawer from "../../components/Navigation/Side Drawer/side_drawer";

class Layout extends Component {
  state = {
    sideDrawerState: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ sideDrawerState: false });
  };

  sideDrawerMenuHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerState: !prevState.sideDrawerState,
      };
    });
  };

  render() {
    return (
      <Aux>
        <SideDrawer
          
          open={this.state.sideDrawerState}
          closed={this.sideDrawerCloseHandler}
        />
        <Toolbar menuHandler={this.sideDrawerMenuHandler} />

        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
