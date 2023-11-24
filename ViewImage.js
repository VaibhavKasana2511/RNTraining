import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Header from './src/components/Header';

export default function ViewImage({route}) {
  const {selectedImage} = route.params;
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ImageBackground
          style={{flex: 0.9}}
          source={{uri: selectedImage}}
          resizeMode="cover"></ImageBackground>
      </View>
      <View style={{flex: 0.2}}></View>
    </View>
  );
}
