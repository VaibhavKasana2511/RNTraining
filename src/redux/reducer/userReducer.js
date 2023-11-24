import {LOGIN_USER, LOGOUT_USER, REGISTER_USER} from '../actions/actionTypes';

const initialState = {
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {user: [...state.user, action.payload]};

    case LOGIN_USER:
      return {...state, user: action.payload};

    case LOGOUT_USER:
      return {...state, user: null};

    default:
      return state;
  }
};

export default userReducer;
