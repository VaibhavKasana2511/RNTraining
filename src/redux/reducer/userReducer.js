import {LOGIN_USER, LOGOUT_USER, REGISTER_USER} from '../actions/actionTypes';

const initialState = {
  user: [],
  login_user: {},
  remeber_me: false,
  remeber_mail: '',
  remeberber_pass: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {...state, user: [...state.user, action.payload]};

    case LOGIN_USER:
      return {...state, login_user: action.payload};

    case 'SET_RMEBER':
      return {...state, ...action.payload};

    case LOGOUT_USER:
      return {...state, login_user: null};

    default:
      return state;
  }
};

export default userReducer;
