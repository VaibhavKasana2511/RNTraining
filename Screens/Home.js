import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';

const Home = ({route, navigation}) => {
  // const {posts} = route.params ? route.params : {};
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = database().ref('/users');
    const postsChange = snapshot => {
      const data = snapshot.val();
      if (data) {
        const postsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setPosts(postsArray);
      }
    };

    postsRef.on('value', postsChange);

    return () => postsRef.off('value', postsChange);
  }, []);

  const renderPosts = ({item}) => (
    <View style={styles.postContainer}>
      {posts ? (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: item.uri}}
              // resizeMode="contain"
            />
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        </>
      ) : (
        <>
          <Text>Post not available</Text>
        </>
      )}
    </View>
  );

  const emptyData = () => (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, color: 'black'}}>No Posts Found!!</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={posts}
        renderItem={renderPosts}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={emptyData}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'green',
  },

  heading: {
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'TwinkleStar-Regular',
  },

  postContainer: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#F8F8FF',
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#e6e6e6',
    // opacity: 0.2,
  },

  imageContainer: {
    // flex: 1,
    marginBottom: 5,
    borderRadius: 10,
    width: '100%',
    // marginHorizontal: 10,
  },

  image: {
    height: 250,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#000000',
  },

  caption: {
    fontSize: 18,
    color: 'black',
    marginTop: 5,
    marginLeft: 25,
  },
});
