import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Assignment 5/Home';
import Login from '../screens/Assignment 5/Login';
import Register from '../screens/Assignment 5/Register';
import {store} from '../redux/store/configureStore';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import React, {useState} from 'react';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const userState = useSelector(state => state.userReducer.login_user);
  console.log('Navigation', userState);

  return (
    <NavigationContainer>
      {userState ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
