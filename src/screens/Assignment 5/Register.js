import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../redux/actions/userActions/userAction';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userReducer.user);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleModal = () => {
    setModalVisible(true);
    dispatch(registerUser(name, email, phone, password));
  };

  const handleRegister = () => {
    navigation.navigate('Login');
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
        <TouchableOpacity onPress={handleModal} style={styles.submitContainer}>
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

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Registration Successfull!</Text>
                <Text style={styles.modalText}>Go back to Login Page...</Text>
                <TouchableOpacity
                  onPress={handleRegister}
                  style={styles.submitContainer}>
                  <Text
                    style={{
                      backgroundColor: 'pink',
                      fontSize: 22,
                      color: 'black',
                      borderRadius: 10,
                      textAlign: 'center',
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                    }}>
                    Login Page
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
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
    flex: 0.1,
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
