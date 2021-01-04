import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import ValButton from '../../components/ValButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Jiro} from 'react-native-textinput-effects';
import BackgroundImg from '../../components/BackgroundImg';

export default class Home extends Component {
  render() {
    return (
      <BackgroundImg justifyContent={'center'} alignItems={'center'}>
        <View style={styles.content}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#DA6A66',
              fontFamily: 'valorant',
              fontSize: 30,
              marginBottom: 20,
            }}>
            {' '}
            valStat{' '}
          </Text>
          <Jiro
            label={'gameName#tagLine'}
            borderColor={'#63A998'}
            inputPadding={16}
            inputStyle={{color: 'white'}}
            onChangeText={this.onChange}
            onSubmitEditing={this.checkValue}
            blurOnSubmit={true}
          />
          <ValButton containerStyle={{marginLeft: '37%'}} />
        </View>
      </BackgroundImg>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    borderRadius: 10,
    width: 250,
    height: 350,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
