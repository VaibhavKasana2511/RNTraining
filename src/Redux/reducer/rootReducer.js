import {combineReducers} from 'redux';
import authReducer from './authReducer';
import feedReducer from './feedReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
  // Add other reducers here if needed
});

export default rootReducer;
