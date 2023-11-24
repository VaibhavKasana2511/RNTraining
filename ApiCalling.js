import {View, Text, FlatList, length, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function FetchApi() {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/todos');
    result = await result.json();
    console.log('arvind');
    console.log(result);
    setData(result);
  };

  //   const getMoviesFromApiAsync = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://jsonplaceholder.typicode.com/posts',
  //       );
  //       const json = await response.json();
  //       return json.movies;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>
        API CALLING USING FETCH
      </Text>
      {data.length ? (
        <FlatList
          style={{marginTop: 20}}
          data={data}
          renderItem={({item}) => (
            <View style={{borderBottomColor: 10}}>
              <Text style={{fontSize: 25}}>{item.id}</Text>
              <Text style={{fontSize: 18}}>Title : {item.title}</Text>
              <Image></Image>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}
