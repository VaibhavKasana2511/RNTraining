import {StyleSheet} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    // margin: 10,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  headingText: {
    flex: 1,
    // backgroundColor: 'purple',
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
  },

  inputContainer: {
    // backgroundColor: 'pink',
    flex: 3,
    justifyContent: 'space-around',
  },

  inputStyle: {
    paddingLeft: 15,
    // width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 20,
  },

  sec2Container: {
    // backgroundColor: 'red',
    flex: 5,
    // width: '100%',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },

  dateContainer: {
    gap: 30,
    flexDirection: 'row',
    width: '100%',
  },

  dobButton: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  datePicker: {
    height: 70,
    width: 225,
  },
  radioContainer: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    width: '100%',
  },

  radioButton: {
    // width: '30%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  dropStyle: {
    paddingLeft: 15,
    width: '35%',
    backgroundColor: 'white',
  },

  experienceContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
  },

  checkboxContainer: {
    flexDirection: 'row',
  },
  checkboxesContainer: {},

  submitContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
  },
});
