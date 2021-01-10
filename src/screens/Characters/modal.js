import React, {Component} from 'react';
import {StyleSheet, View, FlatList, ImageBackground} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';
import LinearGradient from 'react-native-linear-gradient';
import DamageDistribituon from '../../components/icons/DamageDistribituon';
import {ListItem, Avatar} from 'react-native-elements';
import matches from '../../assets/data/matches';
import {images} from '../../assets/data/images';
import RenderItem from '../../components/RenderItem';

export default class CharactersModal extends Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => {
    const {
      score,
      won,
      name,
      kda,
      matches,
      winrate,
      avg_score,
      damage,
      kd,
      tier,
    } = this.props.route.params;

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
          title={tier[0]}
          source={images.tier[tier].uri}
        />
        <Avatar
          size={'small'}
          rounded
          title={name[0]}
          source={images.characters[name].uri}
        />

        <ListItem.Content>
          <ListItem.Title
            style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>
            {name}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 10}}>
            {score}
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content style={{alignItems: 'center'}}>
          <ListItem.Title
            style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>
            {kda}
          </ListItem.Title>
          <ListItem.Title style={{color: 'white', fontSize: 5}}>
            {' '}
            K / D / A{' '}
          </ListItem.Title>
        </ListItem.Content>

        <Avatar
          size={'small'}
          rounded
          title={name[0]}
          source={images.maps[item.map].uri}
        />
      </RenderItem>
    );
  };

  headerChar = (item) => {
    const {
      fav_gun,
      name,
      kda,
      matches,
      winrate,
      avg_score,
      damage,
      kd,
    } = this.props.route.params;
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
        ViewComponent={LinearGradient} // Only if no expo
      >
        <ListItem.Content>
          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            {matches}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            Matches
          </ListItem.Subtitle>

          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            {winrate}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            Total Win Rate
          </ListItem.Subtitle>

          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            {avg_score}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            Total Average Damage
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content>
          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            {kd}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            Total K / D
          </ListItem.Subtitle>

          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            {damage}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            Average Killing
          </ListItem.Subtitle>

          <ListItem.Title
            style={{color: '#63A998', fontWeight: 'bold', fontSize: 13}}>
            {kda}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'white', fontSize: 7}}>
            K / D / A
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
      <BackgroundImg paddingTop={0} paddingBottom={0}>
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
