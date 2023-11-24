import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Assignment 5/Home';
import Login from '../screens/Assignment 5/Login';
import Register from '../screens/Assignment 5/Register';

const Stack = createNativeStackNavigator();

import {View, Text} from 'react-native';
import React from 'react';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
