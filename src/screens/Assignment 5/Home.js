import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
export default function Home() {
  const userState = useSelector(state => state.userReducer.user);
  console.log('Home', userState);
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'white',
        // alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 0.3,
          backgroundColor: 'red',
          justifyContent: 'center',
          shadowoffset: {width: -5, height: 6},
          shadowOpacity: 0.4,
          shadowRadius: 3,
        }}>
        <Text style={{color: 'black', fontSize: 25, textAlign: 'center'}}>
          WELCOME {userState.name}
        </Text>
        <Text style={{color: 'black', fontSize: 25, textAlign: 'center'}}>
          Your Email : {userState.email}
        </Text>
        <Text style={{color: 'black', fontSize: 25, textAlign: 'center'}}>
          Your Contact : {userState.phone}
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: 'pink',
            // width: '100%',
            borderRadius: 20,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 25,
              paddingHorizontal: 25,
              paddingVertical: 5,
              color: 'black',
              // width: '100%',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            LogOut
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
