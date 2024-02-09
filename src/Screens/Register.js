import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function Register({navigation}) {
  //   const dispatch = useDispatch();
  //   const userState = useSelector(state => state.userReducer.user);
  const [registeredUserData, setRegisteredUserData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      try {
        const response = await fetch('https://dummyapi.io/data/v1/user/', {
          headers: {
            'Content-Type': 'application/json',
            'app-id': '65b2433a2fe979ac57fe617f',
          },
        });

        if (response.ok && isMounted) {
          const data = await response.json();
          setRegisteredUserData(data.data); // Assuming 'data' is the property containing user data
        } else {
          console.error('Error fetching user data:', response.status);
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    };

    fetchUserData();

    return () => {
      isMounted = false; // Cleanup to prevent state updates on unmounted component
    };
  }, []);

  const requestOptions = {
    method: 'POST',
    headers: {
      'app-id': '65b2433a2fe979ac57fe617f',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
    }),
  };

  const handleRegister = async () => {
    console.log('Existing Data', registeredUserData);
    const matchingUsers = registeredUserData.filter(
      registeredUserData =>
        registeredUserData.firstName === firstName &&
        registeredUserData.lastName === lastName,
    );

    if (matchingUsers.length > 0) {
      Alert.alert('User Already Exist');
    } else {
      try {
        console.log('Sending POST request...');
        const response = await fetch(
          'https://dummyapi.io/data/v1/user/create',
          requestOptions,
        );
        console.log('POST request completed.');

        const data = await response.json();

        if (response.ok) {
          console.log('Registration successful:', data);
          Alert.alert('User Registered Successfully');
          navigation.navigate('Login');
        } else {
          console.error('Registration failed:', data);
          Alert.alert('Registration Failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.headingText}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            color: '#000000',
            fontSize: 20,
          }}>
          Personal Information
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: '#000000',
            fontSize: 16,
          }}>
          Please fill the following
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#000000',
              fontSize: 14,
            }}>
            First Name
          </Text>
          <TextInput
            style={styles.inputStyle}
            value={firstName}
            placeholder="Enter your First Name"
            onChangeText={text => setFirstName(text)}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#000000',
              fontSize: 14,
            }}>
            Last Name
          </Text>
          <TextInput
            style={styles.inputStyle}
            value={lastName}
            placeholder="Enter your Last Name"
            onChangeText={text => setLastName(text)}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#000000',
              fontSize: 14,
            }}>
            Email Address
          </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.submitContainer}>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              width: '100%',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Register
          </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', paddingTop: 10}}>
          <Text
            style={{
              fontSize: 14,
              color: '#001965',
              fontFamily: 'Poppins-Medium',
            }}>
            Already have an account
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#1C6758', fontFamily: 'Poppins-Bold'}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'space-around',
    margin: 20,
  },

  headingText: {
    marginTop: 20,
    flex: 0.15,
    // backgroundColor: 'purple',
    justifyContent: 'center',
  },

  inputContainer: {
    // backgroundColor: 'pink',
    flex: 0.6,
    justifyContent: 'space-between',
  },

  inputStyle: {
    // flex: 0.1,
    paddingLeft: 15,
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderColor: '#006175',
    borderWidth: 0.5,
    marginTop: 2,
  },

  submitContainer: {
    backgroundColor: '#1C6758',
    borderRadius: 10,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
});
