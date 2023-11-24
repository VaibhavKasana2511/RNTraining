import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {styles} from './styleHome';

const Home = ({route}) => {
  const {
    registrationData,
    dob,
    experience,
    date,
    gender,
    programmingLanguages,
  } = route.params;
  const parsedDate = date ? new Date(date) : null;

  return (
    <View style={styles.mainContainer}>
      {/* <ImageBackground
        source={require('../Register/images/bgReg.png')}
        style={styles.img}
        resizeMode="cover"> */}
      <Header title="Home" />
      <View style={styles.textContainer}>
        <Text style={styles.textData}>Name : {registrationData.name}</Text>
        <Text style={styles.textData}>Email : {registrationData.email}</Text>
        <Text style={styles.textData}>
          Phone No : {registrationData.phoneno}
        </Text>
        <Text style={styles.textData}>
          Your DOB : {parsedDate ? parsedDate.toDateString() : 'N/A'}
        </Text>
        <Text style={styles.textData}>Gender : {gender}</Text>
        <Text style={styles.textData}>Experience : {experience}</Text>
        <Text style={styles.textData}>
          Your Skills : {programmingLanguages}
        </Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Home;
