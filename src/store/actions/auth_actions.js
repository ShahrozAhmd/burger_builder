import * as actionTypes from './actionTypes';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        authData : authData,
    }
}

export const authFail = (err) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: err,
    }
}

export const authenticate = (email, pass) => {
    return dispatch => {
        dispatch(authStart())
    }
}