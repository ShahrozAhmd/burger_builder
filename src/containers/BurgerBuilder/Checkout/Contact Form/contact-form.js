import React, { Component } from "react";
import Button from "../../../../components/UI/Button/button";
import Spinner from "../../../../components/UI/Spinner/spinner";
import classes from "./contatc-form.module.css";
import axios from "../../../../axios-order";
import Aux from "../../../../hoc/auxiliary";
import Input from "../../../../components/UI/Input/input";
import { withRouter } from "react-router-dom";

const INGREDIENTS_PRICES = {
  bacon: 3,
  cheese: 2,
  meat: 4,
  salad: 1,
};

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
      },
      email: {
        elementType: "input",
        elementConfig: {
          placeholder: "your email",
          type: "text",
        },
        value: "",
      },
      city: {
        elementType: "input",
        elementConfig: {
          placeholder: "your city",
          type: "text",
        },
        value: "",
      },
      postalCode: {
        elementType: "input",
        elementConfig: {
          placeholder: "ZIP Code",
          type: "number",
        },
        value: "",
      },

      delivery: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", display: "fastest" },
            { value: "cheapest", display: "cheapest" },
          ],
        },
        value: "",
      },
    },

    ingredients: null,
    loading: false,
    totalPrice: 5,
  };

  //this function is to make out input field working, two way binding
  onChangeHandler = (event, elementRef) => {
    //here we just get the orderForm from state
    let orderForm = { ...this.state.orderForm };
    //now extract the epecific form input object, name, email..
    let specificOrderForm = { ...orderForm[elementRef] };
    //change the value of that specific object
    specificOrderForm.value = event.target.value;
    //assing that complete object into the first clone one
    orderForm[elementRef] = specificOrderForm;
    //update the state finally
    this.setState({ orderForm: orderForm });
  };

  componentDidMount() {
    //here i calculate the total price of burger using the ingredients, getting from props
    const length = Object.keys(this.props.data).length;
    const ing = this.props.data;
    var total = this.state.totalPrice;
    for (let item in INGREDIENTS_PRICES) {
      total += INGREDIENTS_PRICES[item] * ing[item];
    }

    this.setState({ totalPrice: total, ingredients: ing });
  }

  placeOrder = (e) => {
    //to prevent page to refresh on the submission of form
    e.preventDefault();

    this.setState({ loading: true });

    // want to extract each name and value from orderForm object from state and make a new object
    // in which the data will be : {name: shahoz}
    console.log(this.state.orderForm.delivery.value);
    const formData = {};
    for (const item in this.state.orderForm) {
      formData[item] = this.state.orderForm[item].value;
    }

    console.log(formData);

    const order = {
      ingredient: this.state.ingredients,
      price: this.state.totalPrice,
      contactForm: formData,
    };

    //posting order on the server :firebase
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/burger_builder");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
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
          changed={(e) => {
            this.onChangeHandler(e, item.id);
          }}
        />
      );
    });

    return (
      <Aux>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className={classes.ContactForm}>
            <form onSubmit={this.placeOrder}>
              {InputField}
              <Button btntype="Success"> PLACE ORDER </Button>
            </form>
          </div>
        )}
      </Aux>
    );
  }
}

//here i use withRouter becase although this component is load from
//Route but cant get props coz it is not directly loaded but from function
export default withRouter(ContactForm);
