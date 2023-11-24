import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  DELETE_TODO,
} from '../actions/actionTypes';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
