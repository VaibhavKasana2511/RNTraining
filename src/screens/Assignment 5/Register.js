import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../redux/actions/userActions/userAction';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userReducer);
  console.log('Register', userState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(registerUser(name, email, phone, password));
    Alert.alert('Registration Succesful');
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingText}>
        <Text style={{color: 'white', fontSize: 50}}>Register</Text>
        <Text style={{color: 'white', fontSize: 30}}>
          Register Your Account
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          value={name}
          placeholder="Name"
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.inputStyle}
          value={email}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Phone No"
          value={phone}
          keyboardType="numeric"
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.submitContainer}>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              width: '100%',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    // margin: 10,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  headingText: {
    // paddingTop: 10,
    flex: 0.25,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    backgroundColor: 'pink',
    flex: 0.75,
    justifyContent: 'space-evenly',
  },

  inputStyle: {
    // flex: 0.2,
    paddingLeft: 15,
    // width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 20,
  },

  submitContainer: {
    backgroundColor: 'white',
    // width: '100%',
    borderRadius: 20,
    marginHorizontal: 20,
  },
});
