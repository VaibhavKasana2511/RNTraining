import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 10,
    justifyContent: 'space-between',
    // gap: 10,
  },
  containerRow1: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },

  row1Blocks: {
    height: '100%',
    width: 90,
    flex: 0.22,
    backgroundColor: 'red',
    borderRadius: 10,
  },

  containerRow2: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },

  row2Block1: {
    height: '100%',
    width: 180,
    backgroundColor: 'red',
    borderRadius: 10,
    flex: 0.48,
  },

  row2Block2: {
    height: '100%',
    width: 90,
    flex: 0.22,
    backgroundColor: 'red',
    borderRadius: 10,
  },

  containerRow3: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
    // backgroundColor: 'grey',
  },

  row3Block1: {
    height: '100%',
    width: 180,
    backgroundColor: 'red',
    borderRadius: 10,
    flex: 0.5,
  },

  row3Block2: {
    height: '100%',
    width: 90,
    backgroundColor: 'red',
    borderRadius: 10,
    flex: 0.23,
  },

  containerRow4: {
    flex: 0.3,
    backgroundColor: 'red',
    borderRadius: 10,
  },

  containerRow5: {
    flex: 0.2,
    backgroundColor: 'red',
    borderRadius: 10,
  },

  containerRow6: {
    flex: 0.15,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
