/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {styles} from './styles';
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

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>BIOHACKER</Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 45, color: '#001965'}}>Login</Text>
          <Text style={{fontSize: 20, color: '#484848'}}>
            Login To Your Account
          </Text>
        </View>

        <View style={{width: '100%'}}>
          <TextInput
            style={styles.inputEmail}
            placeholder="Enter your Email"></TextInput>
          <View style={styles.inputPassword}>
            <TextInput
              style={{fontSize: 16, flex: 1}}
              secureTextEntry={true}
              placeholder="Enter your Password"></TextInput>
            <TouchableOpacity>
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
          <Pressable
            style={styles.btn}
            onPress={() => Alert.alert('User Login')}>
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
