import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import News from './Screens/News';
import {Button} from '@rneui/base';
import {BlurEffectTypes} from 'react-native-screens';
const Stack = createNativeStackNavigator();

function App() {
  const backgroundColor = '#393E46';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: backgroundColor,
            },

            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="News"
          component={News}
          options={{
            title: 'News',
            headerStyle: {
              backgroundColor: backgroundColor,
            },

            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
