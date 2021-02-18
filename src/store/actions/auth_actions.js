import axios from "axios";
import * as actionTypes from "./actionTypes";

export const logout = () => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("Expire");
  localStorage.removeItem("localId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authLogout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
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
        dispatch(authSuccess(response.data));
        console.log(response.data);
        localStorage.setItem("idToken", response.data.idToken);
        localStorage.setItem("Expire", response.data.expiresIn);
        localStorage.setItem("localId", response.data.localId);
        dispatch(authLogout(response.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const storeAuth = (idToken) => {
  return (dispatch) => {
    if (localStorage.getItem("idToken") !== null || idToken !== null) {
      const authStorage = {
        idToken: localStorage.getItem("idToken"),
        expiresIn: localStorage.getItem("Expire"),
        localId: localStorage.getItem("localId"),
      };
      const expireTime = localStorage.getItem("Expire");
      dispatch(authSuccess(authStorage));
      dispatch(authLogout(expireTime));
    }
  };
};
