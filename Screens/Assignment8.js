import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {interpolate} from 'react-native-reanimated';

const Assignment8 = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const bounceValue = useRef(new Animated.Value(1)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;
  const flipValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const sequenceAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 0.8,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
        {iteration: -1},
      ).start();
    };
    sequenceAnimation();
    return () => {
      scaleValue.setValue(1);
    };
  }, [scaleValue]);

  useEffect(() => {
    const flipSequence = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(flipValue, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
          }),
          Animated.timing(flipValue, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };
    flipSequence();
  }, [flipValue]);

  useEffect(() => {
    const rotationSequence = () => {
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
      ).start();
    };
    rotationSequence();
  }, [rotateValue]);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const frontInterpolate = flipValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const bounceAnimation = () => {
    Animated.spring(bounceValue, {
      toValue: 0.8,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(bounceValue, {
        toValue: 1.2,
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Animated.View
          style={[styles.Icon, {transform: [{scale: scaleValue}]}]}>
          <Icon name="search" color="#E37383" size={25} />
        </Animated.View>
        <TextInput
          style={styles.textInput}
          placeholder="Restaurant name or a dish..."></TextInput>
        <TouchableOpacity onPress={bounceAnimation} style={styles.Icon1}>
          <Animated.View style={[{transform: [{scale: bounceValue}]}]}>
            <Icon name="mic" color="#E37383" size={22} />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.rotateCard, {transform: [{rotate: rotateInterpolate}]}]}>
        <Image
          style={styles.Image}
          source={require('../assets/images/1.png')}
        />
      </TouchableOpacity>
      <Text style={{color: 'black', fontWeight: 'bold', marginTop: 5}}>
        Offers
      </Text>
      <Text style={{color: 'black', fontWeight: 'bold'}}>Flat Discounts</Text>
      <View style={styles.flipContainer}>
        <TouchableOpacity
          style={[styles.flipCard, {transform: [{rotateY: frontInterpolate}]}]}>
          <Image
            style={styles.Image}
            source={require('../assets/images/1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.flipCard, {transform: [{rotateY: backInterpolate}]}]}>
          <Image
            style={styles.Image}
            source={require('../assets/images/2.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Assignment8;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },

  textInput: {
    flex: 0.85,
    marginVertical: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'black',
    justifyContent: 'space-evenly',
    // overflow: true,
  },

  flipCard: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    marginTop: 15,
    position: 'absolute',
    top: 100,
  },

  rotateCard: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    marginTop: 15,
  },

  Icon: {
    // position: 'absolute',
    // backgroundColor: 'green',
    flex: 0.1,
    marginLeft: 7,
    marginTop: 10,
  },

  Icon1: {
    marginTop: 10,
    marginRight: 5,
  },

  Image: {
    height: '100%',
    width: '100%',
    marginTop: 15,
    resizeMode: 'contain',
  },

  flipContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
