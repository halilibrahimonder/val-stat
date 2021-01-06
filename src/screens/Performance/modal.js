import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';

export default class PerformanceModal extends Component {
  render() {
    return (
      <BackgroundImg>
        <FlatList />
      </BackgroundImg>
    );
  }
}

const styles = StyleSheet.create({});
