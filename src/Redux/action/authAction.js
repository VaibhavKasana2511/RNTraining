// authActions.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ADD_POST = 'ADD_POST';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const addPost = posts => ({
  type: ADD_POST,
  payload: posts,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
