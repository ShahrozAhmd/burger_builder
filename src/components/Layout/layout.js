import React, { Component } from "react";
import classes from "./layout.module.css";
import Aux from "../../hoc/auxiliary";
import Toolbar from "../Navigation/Toolbar/toolbar";
import SideDrawer from "../Navigation/Side Drawer/side_drawer";

class Layout extends Component {
  state = {
    openSideDrawer: true,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ openSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <SideDrawer
          open={this.state.openSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <Toolbar />

        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
