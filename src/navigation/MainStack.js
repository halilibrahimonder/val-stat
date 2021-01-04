import React, {Component} from 'react';
import HomeScreen from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {Avatar} from 'react-native-elements';

export default class MainStack extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: '',
          }}
        />
      </Stack.Navigator>
    );
  }
}
