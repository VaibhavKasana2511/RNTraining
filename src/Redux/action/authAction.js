// authActions.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
