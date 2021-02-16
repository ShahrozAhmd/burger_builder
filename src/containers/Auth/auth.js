import React, { Component } from "react";
import Button from "../../components/UI/Button/button";
import Input from "../../components/UI/Input/input";
import classes from "./auth.module.css";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/auth_actions";
import Spinner from "../../components/UI/Spinner/spinner";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    authForm: {
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
      password: {
        elementType: "input",
        elementConfig: {
          placeholder: "your password",
          type: "password",
        },
        value: "",
        validation: {
          isValid: false,
          shouldValidate: true,
          touched: false,
          rules: {
            required: true,
            minLength: 6,
            maxLength: 12,
          },
        },
      },
    },
    isSubmitPossible: false,
    submitButtonNotify: false,
    isSignUp: true,
  };

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

  onChangeHandler = (event, elementRef) => {
    //here we just get the orderForm from state
    let authForm = { ...this.state.authForm };

    //now extract the specific form input object, name, email..
    let specificAuthForm = { ...authForm[elementRef] };

    //change the value of that specific object
    specificAuthForm.value = event.target.value;

    //we check the validation on each single key press, real time validity check, thanks to react.
    specificAuthForm.validation.isValid = this.validityChecker(
      specificAuthForm.value,
      specificAuthForm.validation.rules
    );

    //set touched property to true:
    specificAuthForm.validation.touched = true;

    //assing that complete object into the first clone one
    authForm[elementRef] = specificAuthForm;

    // here i look thorugh all the inpout filed's isValid property value and
    //main a stack in the array of true/false as a string, then I check that
    //if any false found in the stack which means any of the field is not valid or
    //empty so we will not let user submit the form
    let checkForSubmitButton;
    let arr = [];
    for (let item in authForm) {
      if (authForm[item].validation.shouldValidate) {
        arr.push(authForm[item].validation.isValid.toString());
      }
      checkForSubmitButton = !arr.includes("false");
    }

    //update the state finally
    this.setState({
      authForm: authForm,
      isSubmitPossible: checkForSubmitButton,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onAuth(
      this.state.authForm.email.value,
      this.state.authForm.password.value,
      this.state.isSignUp
    );
  };

  signingSwitch = () => {
    this.setState((prevstate) => {
      return {
        isSignUp: !prevstate.isSignUp,
      };
    });
  };

  render() {
    //get all the keys of orderForm object in an array,
    // so we can map on it to generate input fields:
    let authFields = [];
    for (const fields in this.state.authForm) {
      authFields.push({
        id: fields,
        config: this.state.authForm[fields],
      });
    }

    const InputField = authFields.map((item) => {
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

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p style={{ color: "red" }}>{this.props.error.message}</p>;
    }

    let redirect = null;
    // this.props.isAuth ? (redirect = <Redirect to="/burger_builder" />) : null;

    if (this.props.isAuth && this.props.haveIng) {
      redirect = <Redirect to="/checkout" />;
    } else if (this.props.isAuth) {
      redirect = <Redirect to="burger_builder" />;
    }

    return (
      <div className={classes.Auth}>
        {redirect}
        {errorMessage}
        <form onSubmit={this.onSubmitHandler}>
          {this.props.loading ? <Spinner /> : InputField}
          <Button btntype="Success">Submit</Button>
        </form>
        <Button clicked={this.signingSwitch} btntype="Danger">
          Switch To {this.state.isSignUp ? "SIGN IN" : "SIGN UP"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authentication.loading,
    error: state.authentication.error,
    isAuth: state.authentication.idToken !== null,
    haveIng: state.burgerBuilder.totalPrice > 5,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, pass, isSignUp) =>
      dispatch(authActions.authenticate(email, pass, isSignUp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
