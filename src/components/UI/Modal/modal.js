import React from "react";
import classes from "./modal.module.css";
import Backdrop from "../Backdrop/backdrop";
import Aux from "../../../hoc/auxiliary";

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} closebackdrop={props.removebackdrop} />
      <div
        className={`${classes.Modal} ${
          props.show ? classes.showModal : classes.hideModal
        }`}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
