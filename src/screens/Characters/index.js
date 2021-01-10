import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';
import {ListItem, Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import matches from '../../assets/data/matches';
import {images} from '../../assets/data/images';
import DamageDistribituon from '../../components/icons/DamageDistribituon';
import RenderItem from '../../components/RenderItem';

export default class Characters extends Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => {
    return (
      <RenderItem
        linearGradientProps={{
          colors: ['rgba(161,162,162,0.4)', 'rgba(161,162,162,0.4)'],
        }}
        onPress={() => {
          this.props.navigation.navigate('CharactersModal', {
            name: item.name,
            kda: item.kda,
            matches: item.matches,
            winrate: item.winrate,
            avg_score: item.avg_score,
            damage: item.damage,
            kd: item.kd,
            fav_gun: item.fav_gun,
            won: item.won,
            score: item.score,
          });
        }}>
        <Avatar
          size={'small'}
          rounded
          title={item.name[0]}
          source={images.characters[item.name].uri}
        />
        <ListItem.Content>
          <ListItem.Title
            style={{
              alignSelf: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 10,
            }}>
            {item.name}
          </ListItem.Title>
        </ListItem.Content>

        <ListItem.Content>
          <ListItem.Title
            style={{
              alignSelf: 'center',
              color: '#63A998',
              fontWeight: 'bold',
              fontSize: 10,
            }}>
            {item.matches}
          </ListItem.Title>
          <ListItem.Subtitle
            style={{alignSelf: 'center', color: 'white', fontSize: 5}}>
            Matches
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content>
          <ListItem.Title
            style={{
              alignSelf: 'center',
              color: '#63A998',
              fontWeight: 'bold',
              fontSize: 10,
            }}>
            {item.winrate}
          </ListItem.Title>
          <ListItem.Subtitle
            style={{alignSelf: 'center', color: 'white', fontSize: 5}}>
            Win Rate
          </ListItem.Subtitle>
        </ListItem.Content>
        <Avatar
          size={'small'}
          rounded
          title={item.name[0]}
          source={images.characters[item.name].full_small}
        />
      </RenderItem>
    );
  };

  headerChar = (item) => {
    return (
      <ListItem
        containerStyle={{
          margin: 5,
          borderRadius: 10,
          backgroundColor: 'transparent',
        }}
        linearGradientProps={{
          colors: ['rgba(161,162,162,0.4)', 'rgba(161,162,162,0.4)'],
        }}
        ViewComponent={LinearGradient}>
        <ListItem.Content>
          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            44.5%
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            Total Win Rate
          </ListItem.Subtitle>
          <ListItem.Title></ListItem.Title>
          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            185
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            Total Average Damage
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content>
          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            2.0
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            Total K / D
          </ListItem.Subtitle>
          <ListItem.Title></ListItem.Title>
          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            1.8
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            Average Killing
          </ListItem.Subtitle>
        </ListItem.Content>
        <DamageDistribituon
          stroke="white"
          height="100"
          head="#b1b1b1"
          body="white"
          legs="#c8c8c8"
        />
        <ListItem.Content>
          <ListItem.Title style={{color: '#b1b1b1', fontSize: 20}}>
            {' '}
            20%{' '}
          </ListItem.Title>
          <ListItem.Title style={{color: 'white', fontSize: 20}}>
            {' '}
            75%{' '}
          </ListItem.Title>
          <ListItem.Title style={{color: '#c8c8c8', fontSize: 20}}>
            {' '}
            5%{' '}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };
  render() {
    return (
      <BackgroundImg>
        <FlatList
          data={matches}
          ListHeaderComponent={this.headerChar(matches)}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </BackgroundImg>
    );
  }
}
const styles = StyleSheet.create({});
