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
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../Redux/action/authAction';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.auth.user);
  console.log('D1234', userState);

  const [registeredUserData, setRegisteredUserData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://dummyapi.io/data/v1/user/', {
          headers: {
            'Content-Type': 'application/json',
            'app-id': '65b2433a2fe979ac57fe617f',
          },
        });

        if (!response.ok) {
          console.error('Error fetching user data:', response.status);
          return;
        }

        const data = await response.json();
        console.log('API response:', data);
        setRegisteredUserData(data.data);
        setIsLoading(false); // Set loading to false after updating the state
      } catch (error) {
        console.error('Error during API call:', error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    console.log('State after API call:', registeredUserData);
  }, [registeredUserData]);

  const handleSignIn = () => {
    console.log('DATA', registeredUserData);

    if (isLoading) {
      // Optionally handle loading state
      Alert.alert('Please wait, data is still loading.');
      return;
    }

    if (!Array.isArray(registeredUserData)) {
      Alert.alert('Invalid user data format.');
      return;
    }

    const matchingUsers = registeredUserData.filter(
      user => user.firstName === firstName && user.lastName === lastName,
    );

    if (matchingUsers.length > 0) {
      Alert.alert('Sign In Successful', JSON.stringify(matchingUsers));
      dispatch(loginSuccess(matchingUsers));
      navigation.navigate('DrawerNavigator');
    } else {
      Alert.alert('Please Check your Credentials');
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
          Sign In
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: '#000000',
            fontSize: 16,
          }}>
          Enter your Credentials
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
            Enter your First Name
          </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your First Name"
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 10,
              fontFamily: 'Poppins-Medium',
              color: '#000000',
              fontSize: 14,
            }}>
            Enter your Last Name
          </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your Last Name"
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#1C6758" />
        ) : (
          <TouchableOpacity
            style={styles.submitContainer}
            onPress={handleSignIn}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                width: '100%',
                textAlign: 'center',
                marginVertical: 10,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        )}
        <View style={{alignItems: 'center', paddingTop: 10}}>
          <Text
            style={{
              fontSize: 14,
              color: '#001965',
              fontFamily: 'Poppins-Medium',
            }}>
            If you don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#1C6758', fontFamily: 'Poppins-Bold'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
    marginBottom: 10,
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
