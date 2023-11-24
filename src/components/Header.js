import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title, image}) => {
  return (
    <View>
      <Text style={styles.headerText}>{title} </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerText: {
    // flex: 3,
    paddingLeft: 15,
    color: 'black',
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
