/* eslint-disable react/no-unstable-nested-components */
// Navigation/TabNavigator.tsx
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../Screens/Feed';
import CreatePost from '../Screens/CreatePost';
import Profile from '../Screens/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      style={styles.tabNavigator}
      screenOptions={{
        tabBarLabel: () => null, // Hide tab bar labels
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require('../assets/images/HomeLight.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require('../assets/images/postplus.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require('../assets/images/Profile.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: '#F1F1F1',
  },
});

export default TabNavigator;
