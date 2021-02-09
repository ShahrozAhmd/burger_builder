import React, { Component } from "react";
import Button from "../../../../components/UI/Button/button";
import Spinner from "../../../../components/UI/Spinner/spinner";
import classes from "./contatc-form.module.css";
import axios from "../../../../axios-order";
import Aux from "../../../../hoc/auxiliary";
import Input from "../../../../components/UI/Input/input";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as orderActions from "../../../../store/actions/order_actions";

class ContactForm extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          placeholder: "your name",
          type: "text",
        },
        value: "",
        validation: {
          isValid: false,
          shouldValidate: true,
          touched: false,
          rules: {
            required: true,
          },
        },
      },
      email: {
        elementType: "input",
        elementConfig: {
          placeholder: "your email",
          type: "email",
        },
        value: "",
        validation: {
          isValid: false,
          shouldValidate: true,
          touched: false,
          rules: {
            required: true,
          },
        },
      },
      city: {
        elementType: "input",
        elementConfig: {
          placeholder: "your city",
          type: "text",
        },
        value: "",
        validation: {
          isValid: false,
          shouldValidate: true,
          touched: false,
          rules: {
            required: true,
          },
        },
      },
      postalCode: {
        elementType: "input",
        elementConfig: {
          placeholder: "ZIP Code",
          type: "number",
        },
        value: "",
        validation: {
          isValid: false,
          shouldValidate: true,
          touched: false,
          rules: {
            required: true,
            minLength: 4,
            maxLength: 6,
          },
        },
      },

      delivery: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", display: "fastest" },
            { value: "cheapest", display: "cheapest" },
          ],
        },
        validation: {
          shouldValidate: false,
          rules: {
            required: false,
          },
        },
        value: "",
      },
    },
    isOrderPlaceable: false,
    orderButtonNotify: false,
  };

  componentDidUpdate() {
    console.log("Loading:", this.props.loading);
    console.log("Redirect:", this.props.redirect);
    console.log("ingFromStore", this.props.ingredients);
    console.log("totalPriceFromStore", this.props.totalPrice);
  }

  validityChecker = (value, rules) => {
    let itsValid = false;

    if (rules.required) {
      itsValid = value.trim() !== "";
    }
    if (rules.minLength && rules.maxLength) {
      itsValid =
        value.length >= rules.minLength && value.length <= rules.maxLength;
    }

    return itsValid;
  };

  //this function is to make our input field working, two way binding
  onChangeHandler = (event, elementRef) => {
    //here we just get the orderForm from state
    let orderForm = { ...this.state.orderForm };
    //now extract the epecific form input object, name, email..
    let specificOrderForm = { ...orderForm[elementRef] };
    //change the value of that specific object
    specificOrderForm.value = event.target.value;
    //we check the value of each single value
    specificOrderForm.validation.isValid = this.validityChecker(
      specificOrderForm.value,
      specificOrderForm.validation.rules
    );

    //set touched property to true:
    specificOrderForm.validation.touched = true;
    //assing that complete object into the first clone one
    orderForm[elementRef] = specificOrderForm;

    // here i look thorugh all the inpout filed's isValid property value and
    //main a stack in the array of true/false as a string, then I check that
    //if any fasle found in the stack which means any of the field is not valid or
    //empty so we will not let user place order
    let checkForOrderButton;
    let arr = [];
    for (let item in orderForm) {
      if (orderForm[item].validation.shouldValidate) {
        arr.push(orderForm[item].validation.isValid.toString());
      }
      checkForOrderButton = !arr.includes("false");
    }
    //update the state finally
    this.setState({
      orderForm: orderForm,
      isOrderPlaceable: checkForOrderButton,
    });
  };

  placeOrder = (e) => {
    //to prevent page to refresh on the submission of form
    e.preventDefault();

    if (this.state.isOrderPlaceable) {

      // want to extract each name and value from orderForm object from state and make a new object
      // in which the data will be : {name: shahoz}

      const formData = {};
      for (const item in this.state.orderForm) {
        formData[item] = this.state.orderForm[item].value;
      }

      const order = {
        ingredient: this.props.ingFromStore,
        price: this.props.totalPriceFromStore,
        contactForm: formData,
      };

      this.props.onPlacingOrder(order);
    } else {
      this.setState({ orderButtonNotify: true });
    }
  };

  render() {
    if (this.props.redirect) {
      this.props.history.push("/burger_builder");
    }
    //get all the keys of orderForm object in an array,
    // so we can map on it to generate inout fields:
    let ordersFields = [];
    for (const fields in this.state.orderForm) {
      ordersFields.push({
        id: fields,
        config: this.state.orderForm[fields],
      });
    }

    const InputField = ordersFields.map((item) => {
      return (
        <Input
          key={item.id}
          label={item.id}
          elementType={item.config.elementType}
          elementConfig={item.config.elementConfig}
          value={item.config.value}
          shouldValidate={item.config.validation.shouldValidate}
          invalid={!item.config.validation.isValid}
          touched={item.config.validation.touched}
          changed={(e) => {
            this.onChangeHandler(e, item.id);
          }}
        />
      );
    });

    return (
      <Aux>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div className={classes.ContactForm}>
            {this.state.orderButtonNotify ? (
              <h1 style={{ border: "1px solid red", color: "red" }}>
                Fill All Data Correctly
              </h1>
            ) : null}
            <form onSubmit={this.placeOrder}>
              {InputField}
              <div>
                <Button btntype="Success"> PLACE ORDER </Button>
              </div>
            </form>
          </div>
        )}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingFromStore: state.burgerBuilder.ingredients,
    totalPriceFromStore: state.burgerBuilder.totalPrice,
    loading: state.orders.loading,
    redirect: state.orders.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlacingOrder: (order) => dispatch(orderActions.placeOrder(order)),
  };
};
//here i use withRouter becase although this component is load from
//Route but cant get props coz it is not directly loaded but from function
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactForm));
