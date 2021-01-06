import React, {Component} from 'react';
import {StyleSheet, FlatList, Button} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';
import {Animated} from 'react-native';

export default class Career extends Component {
  render() {
    return (
      <BackgroundImg>
        <Button
          onPress={() => this.props.navigation.navigate('ScoreTab')}
          title="ScoreTab"
        />
      </BackgroundImg>
    );
  }
}

const styles = StyleSheet.create({});
