import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';
import ActionSheet from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreatePost = () => {
  const cameraRef = useRef(null);
  const actionSheetRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [camera_type, setCamera_Type] = useState('front');
  const [flash_mode, setFlash_Mode] = useState('off');

  const closeCamera = () => {
    setModalVisible(false);
  };

  const openCamera = () => {
    setModalVisible(true);
  };

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const handleCapture = async () => {
    let res = await cameraRef.current.capture();
    console.log(res);
    setSelectedImage(res.uri);
  };

  const handleCameraType = () => {
    setCamera_Type(camera_type == 'front' ? 'back' : 'front');
  };

  const handleFlashLight = () => {
    setFlash_Mode(flash_mode == 'off' ? 'on' : 'off');
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  const openGallery = () => {
    ImagePicker.openPicker({cropping: true}).then(image => {
      setSelectedImage(image.path);
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#000000',
            marginBottom: 10,
            fontFamily: 'Poppins',
          }}>
          Select Image
        </Text>
        <View style={styles.inputStyle}>
          <TouchableOpacity onPress={openActionSheet}>
            <Image
              style={styles.img}
              source={require('../assets/images/plus.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            marginTop: 10,
            marginBottom: 10,
            fontWeight: '500',
            color: '#000000',
            fontFamily: 'Poppins',
          }}>
          Add Caption
        </Text>
        <TextInput style={styles.inputStyle2} />
      </View>
      <TouchableOpacity style={styles.submitContainer}>
        <Text
          style={{
            width: '100%',
            fontSize: 18,
            color: '#FFFFFF',
            fontWeight: '600',
            textAlign: 'center',
            marginVertical: 10,
            fontFamily: 'Poppins',
          }}>
          Post
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={closeCamera}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              backgroundColor: 'black',
            }}>
            <TouchableOpacity onPress={openGallery}>
              <Icon name="view-gallery" size={45} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={closeCamera}>
              <Icon name="close-box-outline" size={45} color="white" />
            </TouchableOpacity>
          </View>

          <Camera
            style={{flex: 0.8}}
            ref={cameraRef}
            cameraType={camera_type} // front/back(default)
            torchMode={flash_mode}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleFlashLight}>
              <Icon name="flashlight" size={55} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCapture}>
              <Icon name="camera-iris" size={55} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCameraType}>
              <Icon name="camera-switch" size={55} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ActionSheet ref={actionSheetRef}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 200,
            width: '100%',
            backgroundColor: 'white',
          }}>
          <View style={{width: '33%', alignItems: 'center'}}>
            <TouchableOpacity onPress={openCamera}>
              <Image
                style={{height: 40, width: 40, marginBottom: 10}}
                source={require('../assets/images/Camera.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                textAlign: 'center',
              }}>
              Use Camera
            </Text>
          </View>
          <View style={{width: '33%', alignItems: 'center'}}>
            <TouchableOpacity onPress={openGallery}>
              <Image
                style={{height: 40, width: 40, marginBottom: 10}}
                source={require('../assets/images/Image-2.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                textAlign: 'center',
              }}>
              From Gallery
            </Text>
          </View>
          <View style={{width: '33%', alignItems: 'center'}}>
            <TouchableOpacity onPress={closeActionSheet}>
              <Icon name="cancel" size={50} color="grey" />
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: 'black'}}>Cancel</Text>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
  },

  inputStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderColor: '#006175',
    borderWidth: 0.5,
    marginTop: 2,
    height: 150,
  },

  img: {
    margin: '3%',
  },

  inputStyle2: {
    paddingLeft: 15,
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderColor: '#006175',
    borderWidth: 0.5,
    marginTop: 2,
    height: 100,
  },

  submitContainer: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#1C6758',
  },
  iconContainer: {
    // margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },
});
