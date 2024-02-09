import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

const Profile = ({navigation}) => {
  const [registerUserData, setRegisterUserData] = useState(null);
  const userState = useSelector(state => state.auth.user);
  console.log('Profile', userState);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://dummyapi.io/data/v1/user/${userState[0].id}/post`,

          {
            headers: {
              'Content-Type': 'application/json',
              'app-id': '65b2433a2fe979ac57fe617f',
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          setRegisterUserData(data);
        } else {
          console.error('Error fetching user data:', response.status);
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    };

    fetchUserData();
  }, []);

  const renderPosts = ({item}) => navigation.navigate('EditProfile');

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.userContainer}>
        <Image
          style={styles.img}
          source={{uri: registerUserData?.data[0]?.owner.picture}}
        />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            fontWeight: '600',
            fontFamily: 'Poppins',
            color: '#000000',
          }}>
          {registerUserData?.data[0]?.owner.firstName} {''}
          {registerUserData?.data[0]?.owner.lastName}
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={renderPosts} style={{marginVertical: 10}}>
          <Text style={styles.btnTxt}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            fontFamily: 'Poppins',
            color: '#000000',
          }}>
          {registerUserData?.data?.length}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '700',
            fontFamily: 'Poppins',
            color: '#000000',
          }}>
          Posts
        </Text>
      </View>

      <View style={styles.hLine}></View>

      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            fontFamily: 'Poppins',
            color: '#000000',
          }}>
          Posts
        </Text>
        <View style={styles.postContainer}>
          {registerUserData?.data.map((post, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('PostDetails', {postId: post.id})
              }>
              <Image source={{uri: post.image}} style={styles.box} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'green',
  },

  userContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'center',
  },

  img: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },

  btnContainer: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#1C6758',
  },

  btnTxt: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  hLine: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey.+',
    marginVertical: 10,
  },

  boxContainer: {
    marginTop: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    //  flexWrap: 'wrap',
  },

  postContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // Adjust other styles as needed...
  },

  box: {
    height: 120,
    width: 120, // Adjust width as needed to fit two boxes per row
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});
