import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import {useRef, useState} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';
import {styles} from './styleCameraTask';
import ActionSheet from 'react-native-actions-sheet';
import {SafeAreaFrameContext} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const CameraTask = ({navigation}) => {
  const cameraRef = useRef(null);
  const actionSheetRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [camera_type, setCamera_Type] = useState('front');
  const [flash_mode, setFlash_Mode] = useState('off');

  const openAccountImage = () => {
    navigation.navigate('ViewImage', {selectedImage});
  };

  const openCamera = () => {
    setModalVisible(true);
  };

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  const closeCamera = () => {
    setModalVisible(false);
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

  const openGallery = () => {
    ImagePicker.openPicker({cropping: true}).then(image => {
      setSelectedImage(image.path);
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1877F2',
      }}>
      <View>
        <TouchableOpacity
          onPress={openAccountImage}
          style={{
            borderWidth: 3,
            borderColor: '#EEF8FF',
            borderRadius: 100,
            position: 'relative',
            backgroundColor: '#EEF8FF',
          }}>
          {selectedImage ? (
            <Image
              style={{height: 110, width: 110, borderRadius: 100}}
              source={{uri: selectedImage}}
              resizeMode="contain"
            />
          ) : (
            <Icon name="account" size={100} color="grey" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openActionSheet}
          style={{
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: 'black',
            // borderRadius: 100,
            margin: 85,
          }}>
          <Icon name="image-edit-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity onPress={openGallery}>
              <Icon name="view-gallery" size={50} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={closeCamera}>
              <Icon name="close-box-outline" size={50} color="white" />
            </TouchableOpacity>
          </View>

          <Camera
            style={{flex: 0.85}}
            ref={cameraRef}
            cameraType={camera_type} // front/back(default)
            torchMode={flash_mode}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleFlashLight}>
              <Icon name="flashlight" size={60} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCapture}>
              <Icon name="camera-iris" size={60} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCameraType}>
              <Icon name="camera-switch" size={60} color="white" />
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
            backgroundColor: '#F5F3BB',
          }}>
          <View style={{width: '33%', alignItems: 'center'}}>
            <TouchableOpacity onPress={openCamera}>
              <Icon name="camera" size={50} color="grey" />
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
              <Icon name="view-gallery" size={50} color="grey" />
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

export default CameraTask;
