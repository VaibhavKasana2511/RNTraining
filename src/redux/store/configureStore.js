import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
//import counterReducer from '../reducers/counterReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';

import * as reducers from '../reducer';

const reducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['rootReducer'],
  // Optionally, you can configure other options here
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  // other store configuration options
});

const persistor = persistStore(store);

export {store, persistor};
