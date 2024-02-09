// Screens/DeleteAccount.tsx
import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const DeleteAccount = () => {
  const userState = useSelector(state => state.auth.user);
  console.log('Profile', userState);

  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'app-id': '65b2433a2fe979ac57fe617f',
    },
  };

  const handleDeleteAccount = async () => {
    try {
      console.log('Sending PUT request...');
      const response = await fetch(
        `https://dummyapi.io/data/v1/user/${userState[0].id}`,
        requestOptions,
      );

      console.log('Delete request completed.');

      const data = await response.json();

      if (response.ok) {
        console.log('Deleted successful:', data);
      } else {
        console.error('Deletion failed:', data);
      }
    } catch (error) {
      console.error('Error during Deletion:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delete Account Screen</Text>
      <TouchableOpacity
        onPress={handleDeleteAccount}
        style={styles.submitContainer}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            width: '100%',
            textAlign: 'center',
            marginVertical: 10,
          }}>
          Delete
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

export default DeleteAccount;
