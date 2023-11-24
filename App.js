import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraTask from './CameraTask';
import ViewImage from './ViewImage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CameraTask">
        <Stack.Screen
          name="CameraTask"
          component={CameraTask}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewImage"
          component={ViewImage}
          options={{title: 'Profile Photo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
