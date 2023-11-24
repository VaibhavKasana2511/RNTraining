import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/configureStore';
import {ReduxDemo} from './src/screens/reduxDemo/ReduxDemo';

const counterApp = () => {
  return (
    <Provider store={store}>
      <ReduxDemo />
    </Provider>
  );
};
export default counterApp;
