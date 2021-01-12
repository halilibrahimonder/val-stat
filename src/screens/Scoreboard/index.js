import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';
import {ListItem, Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import scores from '../../assets/data/scores';
import {images} from '../../assets/data/images';
import RenderItem from '../../components/RenderItem';

export default class Scoreboard extends Component {
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
          colors:
            item.team == 'A'
              ? ['rgba(99,169,152,0.7)', 'rgba(99,169,152,0.7)']
              : ['rgba(218,106,102,0.7)', 'rgba(218,106,102,0.7)'],
        }}>
        <Avatar
          size={'small'}
          rounded
          title={item.name[0]}
          source={require('../../assets/images/tier/gold2.png')}
        />
        <Avatar
          size={'small'}
          rounded
          title={item.name[0]}
          source={images.characters[item.name].uri}
        />

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Subtitle
            style={{color: 'white', fontSize: 10, fontWeight: '500'}}>
            {item.name}
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title style={{color: 'white', fontSize: 10}}>
            {item.kda}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black', fontSize: 8}}>
            K / D / A
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title style={{color: 'white', fontSize: 10}}>
            {item.avg_score}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black', fontSize: 8}}>
            Avg Score
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title style={{color: 'white', fontSize: 10}}>
            {item.eco_stat}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black', fontSize: 8}}>
            Economy Stat
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title style={{color: 'white', fontSize: 10}}>
            {item.first_blood}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black', fontSize: 8}}>
            First Blood
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title style={{color: 'white', fontSize: 10}}>
            {item.plant}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black', fontSize: 8}}>
            Plant
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title style={{color: 'white', fontSize: 10}}>
            {item.defuse}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black', fontSize: 8}}>
            Defuse
          </ListItem.Subtitle>
        </ListItem.Content>
      </RenderItem>
    );
  };
  ScoreboardHeader = () => {
    return (
      <ListItem
        containerStyle={{
          margin: 3,
          borderRadius: 10,
          backgroundColor: 'transparent',
        }}
        linearGradientProps={{
          colors: ['transparent', '#a1a2a2', '#a1a2a2', 'transparent'],
          start: {x: 0, y: 5},
          end: {x: 0, y: 0},
        }}
        ViewComponent={LinearGradient}>
        <Avatar size={'medium'} rounded source={images.maps['bind'].uri} />
        <ListItem.Content>
          <ListItem.Title style={{color: 'white', fontSize: 25}}>
            {' '}
            13-7{' '}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };
  render() {
    return (
      <BackgroundImg>
        <FlatList
          ListHeaderComponent={this.ScoreboardHeader}
          keyExtractor={this.keyExtractor}
          data={scores}
          renderItem={this.renderItem}
        />
      </BackgroundImg>
    );
  }
}

const styles = StyleSheet.create({});
