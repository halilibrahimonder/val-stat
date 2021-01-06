import React, {Component} from 'react';
import HomeScreen from '../screens/Home';
import CareerTab from './CareerTab';
import ScoreTab from './ScoreTab';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Avatar} from 'react-native-elements';

export default class MainStack extends Component {
  render() {
    const getHeaderTitle = (route) => {
      const routeName = getFocusedRouteNameFromRoute(route) ?? 'Career';
      switch (routeName) {
        case 'Career':
          return 'Career';
        case 'Characters':
          return 'Characters';
      }
    };
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTransparent: true,
          headerLeft: () => (
            <Avatar
              source={require('../assets/images/icons/back.png')}
              onPress={() => this.props.navigation.goBack()}
              placeholderStyle={{backgroundColor: 'transparan'}}
            />
          ),
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: '',
          }}
        />

        <Stack.Screen
          name="CareerTab"
          component={CareerTab}
          options={{title: ''}}
        />

        <Stack.Screen
          name="ScoreTab"
          component={ScoreTab}
          options={{title: ''}}
        />
      </Stack.Navigator>
    );
  }
}
