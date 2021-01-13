import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';
import {ListItem, Avatar} from 'react-native-elements';

import enemy from '../../assets/data/enemies';
import {images} from '../../assets/data/images';
import RenderItem from '../../components/RenderItem';

export default class Performance extends Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => {
    return (
      <RenderItem
        containerStyle={{
          margin: 2,
          borderRadius: 10,
          backgroundColor: 'transparent',
        }}
        linearGradientProps={{
          colors: ['rgba(218,106,102,0.4)', 'rgba(218,106,102,0.4)'],
        }}
        onPress={() => {
          this.props.navigation.navigate('PerformanceModal', {
            name: item.name,
            subtitle: item.subtitle,
            url: item.avatar_url,
          });
        }}>
        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title style={{color: 'white', fontSize: 12}}>
            {' '}
            {item.kill}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black', fontSize: 10}}>
            Kill
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title style={{color: 'white', fontSize: 12}}>
            {' '}
            {item.death}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black', fontSize: 10}}>
            Death
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title style={{color: 'white', fontSize: 12}}>
            {' '}
            {item.assist}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black', fontSize: 10}}>
            Asist
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content>
          <ListItem.Title style={{color: 'white', fontSize: 17}}>
            VS.
          </ListItem.Title>
        </ListItem.Content>

        <Avatar
          size={'small'}
          rounded
          title={item.name[0]}
          source={images.characters[item.name].uri}
        />
        <Avatar
          size={'small'}
          rounded
          title={item.tier[0]}
          source={images.tier[item.tier].uri}
        />

        <ListItem.Content>
          <ListItem.Title style={{color: 'white', fontSize: 10}}>
            {item.name}
          </ListItem.Title>
        </ListItem.Content>
      </RenderItem>
    );
  };
  render() {
    return (
      <BackgroundImg>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={enemy}
          renderItem={this.renderItem}
        />
      </BackgroundImg>
    );
  }
}

const styles = StyleSheet.create({});
