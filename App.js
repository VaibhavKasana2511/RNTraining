import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
// import store from './src /redux/store/store';
import SplashScreen from 'react-native-splash-screen';
import Assignment8 from './Screens/Assignment8';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Assignment8 />;
};

export default App;
