import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import React from 'react';
import {styles} from './styleRegister';
import {Dropdown} from 'react-native-element-dropdown';
import {RadioButton} from 'react-native-paper';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import CheckBox from 'react-native-checkbox';
import Header from '../../components/Header';
import home from '../Home/home';
// import Assignment3 from '../../../Assignment3';

const data = [
  {label: 'Student', value: 1},
  {label: 'Fresher (0-2)', value: 2},
  {label: 'Experienced', value: 3},
];

function register({navigation}) {
  const [selectedValue, setSelectedValue] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
  });
  const handleValidation = () => {
    if (formData.name === '') {
      Alert.alert('Validation Error', 'Please Enter your Name ');
      return false;
    }

    if (formData.phoneno === '') {
      Alert.alert('Validation Error', 'Please Enter your Phone No ');
      return false;
    }

    return true;
  };

  const handleDateChange = date => {
    setFormData({...formData, birthDate: date});
  };
  const handleSubmit = () => {
    if (handleValidation()) {
      navigation.navigate('home', {registrationData: formData});
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header title="Register" style={{flex: 1}} />

      <Text style={styles.headingText}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          value={formData.name}
          placeholder="Name"
          onChangeText={text => setFormData({...formData, name: text})}
        />
        <TextInput
          style={styles.inputStyle}
          value={formData.email}
          placeholder="Email"
          onChangeText={text => setFormData({...formData, email: text})}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Phone No"
          value={formData.phoneno}
          keyboardType="numeric"
          onChangeText={text => setFormData({...formData, phoneno: text})}
        />
      </View>
      <View style={styles.sec2Container}>
        <View style={styles.dateContainer}>
          <View>
            <Text style={{fontSize: 20, color: 'white'}}>
              Your Date Of Birth :
            </Text>
          </View>
          <View style={{width: '25%'}}>
            <Pressable style={styles.dobButton} onPress={() => setOpen(true)}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 20,
                }}>
                Select
              </Text>
            </Pressable>
            <DatePicker
              modal
              // onDateChange={handleDateChange}
              // value={formData.birthDate}
              open={open}
              date={date}
              mode="date"
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </View>
        <View style={styles.radioContainer}>
          <Text style={{fontSize: 20, color: 'white', width: '50%'}}>
            Select your Gender :
          </Text>
          <View style={styles.radioButton}>
            <RadioButton
              value="option1"
              status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue('option1')}
              color="white"
            />
            <Text style={{marginTop: 7, fontSize: 15, color: 'white'}}>
              Male
            </Text>
          </View>

          <View style={styles.radioButton}>
            <RadioButton
              selectedValue={formData.gender}
              value="option2"
              status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue('option2')}
              color="white"
            />
            <Text style={{marginTop: 7, fontSize: 15, color: 'white'}}>
              Female
            </Text>
          </View>
        </View>
        <View style={styles.experienceContainer}>
          <Text style={{fontSize: 20, color: 'white', width: '60%'}}>
            Select your Experience :
          </Text>
          <Dropdown
            style={styles.dropStyle}
            data={data}
            placeholder="Experience"
            labelField="label"
            valueField="value"
            onChange={e => console.log('hiii', e)}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={{fontSize: 20, color: 'white', width: '60%'}}>
            Select your Skills :
          </Text>
          <View style={styles.checkboxesContainer}>
            <CheckBox label="HTML" />
            <CheckBox label="Java Script" />
            <CheckBox label="React Native" />
          </View>
        </View>
        <View>
          <Pressable style={styles.submitContainer} onPress={handleSubmit}>
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
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default register;
