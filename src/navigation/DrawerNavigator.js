/* eslint-disable react/no-unstable-nested-components */
// Navigation/DrawerNavigator.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import SearchFeed from '../Screens/SearchFeed';
import SearchUser from '../Screens/SearchUser';
import DeleteAccount from '../Screens/DeleteAccount';
import Logout from '../Screens/Logout';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerType="slide">
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: () => <Icon name="home" size={22} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Search Feed"
        component={SearchFeed}
        options={{
          drawerIcon: () => (
            <Icon name="photo-library" size={22} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Search User"
        component={SearchUser}
        options={{
          drawerIcon: () => (
            <Icon name="person-search" size={22} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Delete Account"
        component={DeleteAccount}
        options={{
          drawerIcon: () => <Icon name="delete" size={22} color="red" />,
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: () => <Icon name="logout" size={22} color="black" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
