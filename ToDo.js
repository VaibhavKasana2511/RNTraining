// import 'react-native-gesture-handler';
import ParentToDo from './ParentToDo';
import App from './App';
import Assignment2 from './Assignment2';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Profile from './Profile';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        resizeMode="cover"
        source={require('./img/back1.png')}>
        <View
          style={{
            backgroundColor: '#FFD667',
            justifyContent: 'space-between',
            gap: 5,
            alignItems: 'center',
            margin: 20,
            paddingVertical: 20,
            borderWidth: 4,
            borderColor: 'white',
            borderRadius: 10,
          }}>
          <TouchableOpacity>
            <Text style={stylesHomeScreen.text}>ToDo List</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={stylesHomeScreen.text}>BIOHACKER</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={stylesHomeScreen.text}>Flex</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

function drawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="BIOHACKER" component={App} />
      <Drawer.Screen name="ToDo" component={ParentToDo} />
      <Drawer.Screen name="Flex" component={Assignment2} />
    </Drawer.Navigator>
  );
}
export default function ToDo() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={drawerNavigator} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stylesHomeScreen = StyleSheet.create({
  text: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'black',
    borderWidth: 3,
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
