import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
// import store from './src /redux/store/store';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './Navigation/RootNavigator';
import Assignment8 from './Assignment8';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <Provider store={store}>
    <Assignment8 />
    // </Provider>
  );
};

export default App;
