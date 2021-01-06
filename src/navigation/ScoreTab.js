import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PerformanceScreen from '../screens/Performance';
import ScoreboardScreen from '../screens/Scoreboard';
import Orientation from 'react-native-orientation-locker';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

export default class ScoreContainer extends Component {
  _onOrientationDidChange = (orientation) => {
    if (orientation == 'PORTRAIT') {
      Orientation.lockToLandscapeLeft();
    }
  };

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
    Orientation.addOrientationListener(this._onOrientationDidChange);
  }

  componentWillUnmount() {
    Orientation.unlockAllOrientations();
    Orientation.lockToPortrait();
    Orientation.removeOrientationListener(this._onOrientationDidChange);
  }
  render() {
    const Tab = createMaterialBottomTabNavigator();

    return (
      <Tab.Navigator
        initialRouteName="Scoreboard"
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
          name="Scoreboard"
          component={ScoreboardScreen}
          options={{
            tabBarLabel: (
              <Text style={{fontSize: 10, fontFamily: 'valorant'}}>
                Scoreboard
              </Text>
            ),
          }}
          initialParams={this.props.route.params}
        />

        <Tab.Screen
          name="Performance"
          component={PerformanceScreen}
          options={{
            tabBarLabel: (
              <Text style={{fontSize: 10, fontFamily: 'valorant'}}>
                Performance
              </Text>
            ),
          }}
          initialParams={this.props.route.params}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
