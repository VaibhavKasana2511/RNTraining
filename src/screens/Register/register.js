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
// import CheckBox from '@react-native-community/checkbox';
import Header from '../../components/Header';
// import home from '../Home/Home';
// import Assignment3 from '../../../Assignment3';

const data = [
  {label: 'Student', value: 'Student'},
  {label: 'Fresher (0-2)', value: 'Fresher with experience less than 2 years'},
  {label: 'Experienced', value: 'Experienced'},
];

const genders = ['Male', 'Female'];

const programmingLanguagesList = ['JavaScript', 'Python', 'Java'];

function Register({navigation}) {
  const [selectedValue, setSelectedValue] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState('');
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [experience, setExperience] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    experience: '',
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

  const handleSubmit = () => {
    if (handleValidation()) {
      navigation.navigate('Home', {
        registrationData: formData,
        experience,
        gender,
        programmingLanguages,
        date: serializableDate,
      });
    }
  };

  const serializableDate = date.toJSON();

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
              open={open}
              date={date}
              mode="date"
              onDateChange={date => {
                setDate(date);
              }}
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
          {genders.map((gen, index) => (
            <View key={index} style={styles.radioButton}>
              <RadioButton
                color="white"
                value={gen}
                status={gen === gender ? 'checked' : 'unchecked'}
                onPress={() => setGender(gen)}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  paddingTop: 4,
                }}>
                {gen}
              </Text>
            </View>
          ))}
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
            onChange={item => {
              setExperience(item.value);
            }}
          />
        </View>
        {/* <View style={styles.checkboxContainer}>
          <Text style={{fontSize: 20, color: 'white', width: '60%'}}>
            Select your Skills :
          </Text>
          {programmingLanguagesList.map((lang, index) => (
            <View key={index} style={styles.checkBox}>
              <CheckBox
                tintColors={{true: 'white', false: 'grey'}}
                value={programmingLanguages.includes(lang)}
                onValueChange={() => {
                  if (programmingLanguages.includes(lang)) {
                    setProgrammingLanguages(
                      programmingLanguages.filter(item => item !== lang),
                    );
                  } else {
                    setProgrammingLanguages([...programmingLanguages, lang]);
                  }
                }}
              />
              <Text style={{color: 'white', fontSize: 20, alignSelf: 'center'}}>
                {lang}
              </Text>
            </View>
          ))}
        </View> */}
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

export default Register;
