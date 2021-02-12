import React, { Component } from "react";
import classes from "./layout.module.css";
import Aux from "../auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/toolbar";
import SideDrawer from "../../components/Navigation/Side Drawer/side_drawer";
import { connect } from "react-redux";

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
          isAuth={this.props.isAuth}
          open={this.state.sideDrawerState}
          closed={this.sideDrawerCloseHandler}
        />
        <Toolbar
          menuHandler={this.sideDrawerMenuHandler}
          isAuth={this.props.isAuth}
        />

        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authentication.idToken,
  };
};

export default connect(mapStateToProps, null)(Layout);
