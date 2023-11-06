/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {styles} from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToDo from './ToDo';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
  useColorScheme,
  View,
  TouchableHighlight,
  Pressable,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App({navigation}) {
  const [email, setEmail] = useState('');
  // const [password,setPassword]=useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('ToDo');

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginDetails = () => {
    Alert.alert(
      'Entered Detail',
      `Your email is :  ${email}  \nYour Password :  ${password}`,
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Button title="ToDo" onPress={() => navigation.navigate('ToDo')}></Button>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>BIOHACKER</Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50, color: '#001965'}}>Login</Text>
          <Text style={{fontSize: 20, color: '#484848'}}>
            Login To Your Account
          </Text>
        </View>

        <View style={{width: '100%'}}>
          <TextInput
            style={styles.inputEmail}
            value={email}
            placeholder="Enter your Email"
            onChangeText={text => setEmail(text)}></TextInput>
          <View style={styles.inputPassword}>
            <TextInput
              style={{fontSize: 16, flex: 1}}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Enter your Password"></TextInput>
            <TouchableOpacity onPress={PasswordVisibility}>
              <Image
                style={styles.eyeLogo}
                source={require('./img/eyeimg.png')}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              textAlign: 'right',
              fontSize: 12,
              color: '#556B2F',
              paddingTop: 5,
              paddingRight: 2,
            }}>
            {' '}
            Forgot Password?
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 0.3,
          justifyContent: 'space-between',
          // backgroundColor: 'grey',
        }}>
        <View>
          <Pressable style={styles.btn} onPress={loginDetails}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                textAlign: 'center',
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              Login
            </Text>
          </Pressable>
        </View>

        <View style={{alignItems: 'center', paddingTop: 10}}>
          <Text style={{fontSize: 14, color: '#001965'}}>
            If you don't have an account?{' '}
            <Text style={{color: '#4FA8D8'}}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
