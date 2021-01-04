import React, {Component} from 'react';
import {Text, View, LogBox} from 'react-native';
import AppContainer from './src/navigation/RootStack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';

export default class App extends Component {
  render() {
    LogBox.ignoreLogs(['Require cycle: ']);
    return (
      <PaperProvider style={{flex: 1}}>
        <AppContainer />
      </PaperProvider>
    );
  }
}
