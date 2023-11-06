import {ImageBackground, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },

  headerContainer: {
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  title: {
    color: '#001965',
    fontSize: 40,
    fontWeight: 'bold',
  },

  loginContainer: {
    // gap:20,
    flex: 0.6,
    // backgroundColor: 'pink',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-around',
  },

  // textinputContainer:{
  //     alignSelf:'center',
  //     width:350,
  //     alignItems:'center',
  // },

  inputEmail: {
    fontFamily: 'poppins',
    fontSize: 16,
    borderRadius: 20,
    height: 50,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
    paddingLeft: 10,
  },

  inputPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 7,
    borderRadius: 20,
    height: 50,
    backgroundColor: '#F5F5F5',
    paddingRight: 10,
  },

  eyeLogo: {
    top: 15,
    // right: 20,
  },

  btn: {
    backgroundColor: '#001965',
    borderRadius: 20,
  },
});
