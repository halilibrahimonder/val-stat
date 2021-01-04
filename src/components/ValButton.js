import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {Icon} from 'react-native-elements';

export default class ValButton extends Component {
  render() {
    const {onPress, ...props} = this.props;

    return (
      <View>
        <Icon
          name="angle-right"
          type="font-awesome"
          color="#DA6A66"
          onPress={onPress}
          size={30}
          containerStyle={{borderRadius: 2}}
          reverse
          {...props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
