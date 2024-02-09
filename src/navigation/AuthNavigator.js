// Navigation/AuthNavigator.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import DrawerNavigator from './DrawerNavigator';
import EditProfile from '../Screens/EditProfile';
import Logout from '../Screens/Logout';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={(headerShown = true)}
      />
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={(headerShown = true)}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
