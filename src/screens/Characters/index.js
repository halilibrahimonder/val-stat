import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';

export default class Characters extends Component {
  render() {
    return (
      <BackgroundImg>
        <Button
          onPress={() => this.props.navigation.navigate('CharactersModal')}
          title="CharactersModal"
        />
      </BackgroundImg>
    );
  }
}
const styles = StyleSheet.create({});
