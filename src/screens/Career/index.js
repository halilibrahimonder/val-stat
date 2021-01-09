import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';
import matches from '../../assets/data/matches';
import {images} from '../../assets/data/images';
import RenderItem from '../../components/RenderItem';
import {ListItem, Avatar} from 'react-native-elements';

export default class Career extends Component {
  render() {
    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({item}) => {
      return (
        <RenderItem
          linearGradientProps={{
            colors: item.won
              ? ['transparent', '#63A998', 'transparent', '#a1a2a2']
              : ['transparent', '#DA6A66', 'transparent', '#a1a2a2'],
            locations: [0, 0.0, 0.3, 1],
            useAngle: true,
            angle: 115,
            angleCenter: {x: 0.4, y: 1},
          }}
          onPress={() => {
            this.props.navigation.navigate('ScoreTab', {
              name: item.name,
              subtitle: item.subtitle,
              url: item.avatar_url,
            });
          }}>
          <Avatar
            size={'small'}
            rounded
            title={item.name[0]}
            source={images.tier[item.tier].uri}
          />
          <Avatar
            size={'small'}
            rounded
            title={item.name[0]}
            source={images.characters[item.name].uri}
          />

          <ListItem.Content style={{alignItems: 'center'}}>
            <ListItem.Title
              style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>
              {item.name}
            </ListItem.Title>
            <ListItem.Subtitle style={{color: 'white', fontSize: 10}}>
              {item.skor}
            </ListItem.Subtitle>
          </ListItem.Content>

          <ListItem.Content style={{alignItems: 'center'}}>
            <ListItem.Title
              style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>
              {item.kda}
            </ListItem.Title>
            <ListItem.Title style={{color: 'white', fontSize: 5}}>
              {' '}
              K / D / A{' '}
            </ListItem.Title>
          </ListItem.Content>

          <Avatar
            size={'small'}
            rounded
            title={item.name[0]}
            source={images.maps[item.map].uri}
          />
        </RenderItem>
      );
    };
    return (
      <BackgroundImg>
        <FlatList
          keyExtractor={keyExtractor}
          data={matches}
          renderItem={renderItem}
        />
      </BackgroundImg>
    );
  }
}

const styles = StyleSheet.create({});
