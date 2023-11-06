import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/Register/register';
import home from './src/screens/Home/home';

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
        <Stack.Screen name="home" component={home} options={{title: 'Home'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
