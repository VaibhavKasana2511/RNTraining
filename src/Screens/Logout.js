// Screens/Logout.tsx
import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../Redux/action/authAction';

const Logout = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    // Add any additional logout logic (e.g., clear async storage, navigate to login screen, etc.)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Logout Screen</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.submitContainer}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            width: '100%',
            textAlign: 'center',
            marginVertical: 10,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    fontFamily: 'Poppins-Bold',
  },
  submitContainer: {
    backgroundColor: '#1C6758',
    borderRadius: 10,
    width: '50%',
  },
});

export default Logout;
