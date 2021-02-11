import * as actionTypes from "../actions/actionTypes";

const initialState = {
  idToken: null,
  localId: null,
  loading: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        idToken: action.authData.idToken,
        localId: action.authData.localId,
        loading: false,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
