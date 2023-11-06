import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {styles} from './styleHome';

const home = ({route}) => {
  const {registrationData} = route.params;

  return (
    <View style={styles.mainContainer}>
      <Header title="Home" />
      <Text>Name : {registrationData.name}</Text>
      <Text>Email : {registrationData.email}</Text>
      <Text>Phone No : {registrationData.phoneno}</Text>
      <Text>Your DOB :</Text>
      <Text>Gender :</Text>
      <Text>Experience :</Text>
      <Text>Your Skills :</Text>
    </View>
  );
};

export default home;
