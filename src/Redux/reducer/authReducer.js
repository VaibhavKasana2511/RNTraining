// authReducer.js

import {LOGIN_SUCCESS} from '../action/authAction';
import {LOGOUT_USER} from '../action/authAction';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {...state, user: null};

    default:
      return state;
  }
};

export default authReducer;
