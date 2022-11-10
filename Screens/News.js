import {Image, TabView} from '@rneui/base';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Text, View, Dimensions} from 'react-native';
import {Linking} from 'react-native';

function News(props) {
  console.log(props.route.params.URL);
  const [news, setNews] = useState('No news yet');
  const [loading, setLoading] = useState(true);
  const getNews = () => {
    setLoading(true);
    fetch(props.route.params.URL)
      .then(response => response.json())
      .then(json => {
        setNews(json.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getNews();
    console.log('News has been fetched', news);
  }, []);

  const width = Dimensions.get('window').width;
  const [index, setIndex] = React.useState(0);

  function convertDate(dateString) {
    const date = new Date(dateString);

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    return date.toLocaleDateString('en-us', options);
  }

  return (
    <TabView
      value={index}
      onChange={setIndex}
      animationType="spring"
      containerStyle={{
        backgroundColor: '#F2E7D5',
        padding: 0,
        margin: 0,
      }}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        news.map((item, index) => {
          return (
            <TabView.Item title={item.title} key={index}>
              <View
                style={{
                  flex: 1,
                  minHeight: '100%',
                  padding: 0,
                  margin: 0,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Image
                    source={{
                      uri: item.urlToImage
                        ? item.urlToImage
                        : 'https://picsum.photos/300/500',
                    }}
                    style={{
                      width: width,
                      padding: 0,
                      margin: 0,
                      height: 450,
                      resizeMode: 'cover',
                    }}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 24,
                      fontWeight: 'bold',
                      padding: 10,
                      paddingHorizontal: 20,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 12,
                      fontWeight: 'bold',
                      paddingHorizontal: 20,
                    }}>
                    {convertDate(String(item.publishedAt))}
                  </Text>
                </View>
                <Text
                  style={{
                    color: '#F2E7D5',
                    fontSize: 18,
                    paddingHorizontal: 20,
                    paddingTop: 15,
                    paddingBottom: 15,
                    backgroundColor: '#393E46',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}>
                  {!item.content ? (
                    "Sorry, we don't have any content for this article"
                  ) : String(item.content).length > 100 ? (
                    <Text>
                      {String(item.content).substring(0, 100)}...
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          textDecorationLine: 'underline',
                        }}
                        onPress={() => {
                          Linking.openURL(item.url);
                        }}>
                        Read more
                      </Text>
                    </Text>
                  ) : (
                    String(item.content)
                  )}
                </Text>
              </View>
            </TabView.Item>
          );
        })
      )}
    </TabView>
  );
}

export default News;
