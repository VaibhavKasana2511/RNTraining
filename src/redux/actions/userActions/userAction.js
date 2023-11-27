import {REGISTER_USER, LOGIN_USER, LOGOUT_USER} from '../actionTypes';

export const registerUser = (name, email, phone, password) => ({
  type: REGISTER_USER,
  payload: {name, email, phone, password},
});

export const loginUser = (email, password, phone, name) => ({
  type: LOGIN_USER,
  payload: {email, password, phone, name},
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
