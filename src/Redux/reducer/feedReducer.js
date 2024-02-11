import {ADD_POST} from '../action/authAction';

const initialState = {
  posts: [],
};
const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default feedReducer;
