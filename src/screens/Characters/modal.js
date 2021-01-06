import React, {Component} from 'react';
import {StyleSheet, View, FlatList, ImageBackground} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';

export default class CharactersModal extends Component {
  render() {
    return (
      <BackgroundImg>
        <FlatList />
      </BackgroundImg>
    );
  }
}
const styles = StyleSheet.create({});
