import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CareerScreen from '../screens/Career';
import CharactersScreen from '../screens/Characters';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CareerContainer extends Component {
  render() {
    const Tab = createMaterialBottomTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName="Career"
        activeColor="#63A998"
        inactiveColor="#DA6A66"
        barStyle={{
          backgroundColor: 'transparent',
          borderTopWidth: 1,
          borderColor: 'white',
          borderRadius: 50,
          position: 'absolute',
        }}
        sceneAnimationEnabled={true}>
        <Tab.Screen
          name="Career"
          component={CareerScreen}
          options={{
            tabBarLabel: (
              <Text style={{fontSize: 10, fontFamily: 'valorant'}}>Career</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Characters"
          component={CharactersScreen}
          options={{
            tabBarLabel: (
              <Text style={{fontSize: 10, fontFamily: 'valorant'}}>
                Characters
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
