import {ImageBackground, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#606766',
    // padding: 10,
    // alignItems: 'center',
  },
  Heading: {
    // flex: 0.2,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    // paddingTop: 15,
  },

  image: {
    flex: 1,
  },

  headerContainer: {
    // alignItems: 'center',
    // flex: 0.2,
  },

  contentContainer: {
    flex: 1,
    // justifyContent: 'space-between',
    padding: 20,
  },

  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  titleBox: {
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: 'white',
    // flex: 0.6,
    width: '70%',
  },

  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    width: '25%',
    // flex: 0.3,
  },

  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 18,
  },

  itemList: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    width: '45%',
  },

  taskButtons: {
    flexDirection: 'row',
    width: '52%',
    justifyContent: 'space-between',
  },

  completeButton: {
    color: 'red',
    // fontWeight: 'bold',
    fontSize: 15,
  },

  deleteButton: {
    fontSize: 15,
    color: 'white',
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
  },

  editButton: {
    fontSize: 15,
    color: 'white',
    borderColor: '#FFD700',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
});
