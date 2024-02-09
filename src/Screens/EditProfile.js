// Screens/EditProfile.js
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

const EditProfile = () => {
  const userState = useSelector(state => state.auth.user);
  console.log('EditProfile', userState);

  const [image, setImage] = useState(null);
  const [registerUserData, setRegisterUserData] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://dummyapi.io/data/v1/user/${userState[0].id}/post`,
          {
            headers: {
              'Content-Type': 'application/json',
              'app-id': '65b2433a2fe979ac57fe617f',
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          setRegisterUserData(data);
        } else {
          console.error('Error fetching user data:', response.status);
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    };

    fetchUserData();
  }, []);

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'app-id': '65b2433a2fe979ac57fe617f',
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
    }),
  };

  const updateProfile = async () => {
    try {
      console.log('Sending PUT request...');
      const response = await fetch(
        `https://dummyapi.io/data/v1/user/${userState[0].id}`,
        requestOptions,
      );

      console.log('PUT request completed.');

      const data = await response.json();

      if (response.ok) {
        console.log('Update successful:', data);
      } else {
        console.error('Update failed:', data);
      }
    } catch (error) {
      console.error('Error during Updation:', error);
    }
  };

  const openCamera = () => {
    console.log('first');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.userContainer}>
        <Image
          style={styles.img}
          source={{uri: registerUserData?.data[0]?.owner.picture}}
        />
        {/* <TouchableOpacity onPress={openCamera}>
          <Entypo
            style={styles.cameraImg}
            name="camera"
            size={20}
            color="black"
          />
        </TouchableOpacity> */}

        <Text
          style={{
            fontSize: 18,
            marginLeft: 20,
            color: '#000000',
            fontWeight: '600',
            fontFamily: 'Poppins',
          }}>
          {registerUserData?.data[0]?.owner.firstName} {''}
          {registerUserData?.data[0]?.owner.lastName}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.inputText}>First Name</Text>
          <TextInput
            style={styles.inputStyle}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
        </View>

        <View style={styles.txtContainer}>
          <Text style={styles.inputText}>Last Name</Text>
          <TextInput
            style={styles.inputStyle1}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.textInput}>
            <Text style={styles.inputText}>Phone Number</Text>
            <TextInput
              style={styles.inputStyle2}
              value={contact}
              onChangeText={text => setContact(text)}
            />
          </View>

          <View style={styles.textInput}>
            <Text style={styles.inputText}>Gender</Text>
            <TextInput
              style={styles.inputStyle2}
              value={gender}
              onChangeText={text => setGender(text)}
            />
          </View>
        </View>

        <View style={styles.txtContainer}>
          <Text style={styles.inputText}>Region</Text>
          <TextInput
            style={styles.inputStyle1}
            value={region}
            onChangeText={text => setRegion(text)}
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={updateProfile}
            style={{marginVertical: 15}}>
            <Text style={styles.btnTxt}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor:'green',
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'center',
  },

  img: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },

  // cameraImg: {
  //   height: 20,
  //   width: 20,
  //   position: 'absolute',
  //   bottom: -30,
  //   right: -10,
  // },

  inputContainer: {
    // flex: 0,
    borderRadius: 10,
    justifyContent: 'space-around',
    // backgroundColor: 'green',
  },

  txtContainer: {
    marginTop: 30,
  },

  inputText: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Poppins',
    marginBottom: 10,
  },

  textInput: {
    width: '45%',
    marginTop: 10,
    flexDirection: 'column',
    // backgroundColor:'green',
  },

  inputStyle2: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
  },

  inputStyle: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#006175',
  },

  inputStyle1: {
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
  },

  btnContainer: {
    width: '100%',
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#1C6758',
  },

  btnTxt: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },

  postContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    //  backgroundColor:'green',
  },
});
