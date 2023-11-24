import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
} from '../actionTypes';

export const AddTodo = text => ({
  type: ADD_TODO,
  payload: {id: new Date().getTime(), text, iscompleted: false},
});

export const updateTodo = (id, newText) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    newText,
  },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});

export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};
