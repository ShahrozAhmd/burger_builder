import axios from "axios";
import * as actionTypes from "./actionTypes";

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authLogout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (err) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: err,
  };
};

export const authenticate = (email, pass, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: pass,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBy4c6DaAfhkiDB6TP06-rFyhScM1LuZek";
    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBy4c6DaAfhkiDB6TP06-rFyhScM1LuZek";
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response.data);
        dispatch(authSuccess(response.data));
        dispatch(authLogout(response.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};
