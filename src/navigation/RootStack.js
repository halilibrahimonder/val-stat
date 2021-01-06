import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PerformanceModal from '../screens/Performance/modal';
import CharactersModal from '../screens/Characters/modal';
import MainStackScreen from './MainStack';

export default class AppContainer extends Component {
  render() {
    const RootStack = createStackNavigator();
    return (
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="Main" component={MainStackScreen} />
          <RootStack.Screen
            name="PerformanceModal"
            component={PerformanceModal}
          />
          <RootStack.Screen
            name="CharactersModal"
            component={CharactersModal}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
