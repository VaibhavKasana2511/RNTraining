import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style2';
export default function Assignment2() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerRow1}>
        <View style={styles.row1Blocks}></View>
        <View style={styles.row1Blocks}></View>
        <View style={styles.row1Blocks}></View>
        <View style={styles.row1Blocks}></View>
      </View>
      <View style={styles.containerRow2}>
        <View style={styles.row2Block1}></View>
        <View style={styles.row2Block2}></View>
      </View>
      <View style={styles.containerRow3}>
        <View style={styles.row3Block1}></View>
        <View style={styles.row3Block2}></View>
      </View>

      <View style={styles.containerRow4}></View>
      <View style={styles.containerRow5}></View>
      <View style={styles.containerRow6}></View>
    </View>
  );
}
