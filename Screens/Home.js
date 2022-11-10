import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';

function Home({navigation}) {
  const API_KEY = 'b490f0b56e8d4dadba72ec494264dfc4';
  const data = [
    {
      id: 'a',
      value: 'US News',
      country: 'us',
      URL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    },
    {
      id: 'b',
      value: 'India Top Headlines',
      URL: `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`,
    },
    {
      id: 'c',
      value: 'Business News',
      URL: `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}`,
    },
    {
      id: 'd',
      value: 'Sports News',
      URL: `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}`,
    },
    {
      id: 'e',
      value: 'Health News',
      URL: `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${API_KEY}`,
    },
    {
      id: 'f',
      value: 'Entertainment News',
      URL: `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`,
    },
    {
      id: 'g',
      value: 'Science News',
      URL: `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${API_KEY}`,
    },
    {
      id: 'h',
      value: 'Technology News',

      URL: `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API_KEY}`,
    },
  ];
  const numColumns = 2;
  const size = Dimensions.get('window').width / numColumns;
  const styles = StyleSheet.create({
    view: {
      paddingTop: 5,
      backgroundColor: '#F2E7D5',
      minHeight: '100%',
    },
    itemContainer: {
      width: size,
      height: size,
    },
    item: {
      flex: 1,
      margin: 5,
      backgroundColor: '#393E46',
      borderRadius: 20,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      padding:10,
      color: '#F2E7D5',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: 30,
    },
  });
  function Grid(props) {
    return (
      <View style={styles.view}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('News', {
                  URL: item.URL,
                });
              }}
              underlayColor="white">
              <View style={styles.itemContainer}>
                <View style={styles.item}>
                  <Text style={styles.text}>{item.value}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Grid />
    </View>
  );
}

export default Home;
