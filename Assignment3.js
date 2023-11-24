import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/Register/Register';
import Home from './src/screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function Assignment3() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
