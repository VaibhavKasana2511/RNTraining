import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/configureStore';
import Register from './src/screens/Assignment 5/Register';
import AppNavigator from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';

const Assignment5 = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default Assignment5;
