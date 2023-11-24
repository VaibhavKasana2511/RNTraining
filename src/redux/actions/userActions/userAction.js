import {REGISTER_USER, LOGIN_USER, LOGOUT_USER} from '../actionTypes';

export const registerUser = (name, email, phone, password) => ({
  type: REGISTER_USER,
  payload: {name, email, phone, password},
});

export const loginUser = user => ({
  type: LOGIN_USER,
  payload: {email, password, rememberMe},
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
