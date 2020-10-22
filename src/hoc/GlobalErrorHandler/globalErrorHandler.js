import React, { Component } from "react";
import Modal from "../../components/UI/Modal/modal";
import Aux from "../auxiliary";

const globalErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmed = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} removebackdrop={this.errorConfirmed}>
            {this.state.error? this.state.error.message : null}
            </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default globalErrorHandler;
