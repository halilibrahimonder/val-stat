import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';

export default class Performance extends Component {
  render() {
    return (
      <BackgroundImg>
        <Button
          onPress={() => this.props.navigation.navigate('PerformanceModal')}
          title="PerformanceModal"
        />
      </BackgroundImg>
    );
  }
}

const styles = StyleSheet.create({});
