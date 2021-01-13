import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import BackgroundImg from '../../components/BackgroundImg';
import {ListItem, Avatar, Image} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import perf from '../../assets/data/performances';
import {images} from '../../assets/data/images';
import DamageDistribituon from '../../components/icons/DamageDistribituon';
import RenderItem from '../../components/RenderItem';

export default class PerformanceModal extends Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => {
    return (
      <RenderItem
        linearGradientProps={{
          colors: item.result.status
            ? ['rgba(99,169,152,0.2)', 'rgba(99,169,152,0.2)']
            : ['rgba(218,106,102,0.2)', 'rgba(218,106,102,0.2)'],
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <ListItem.Content>
            <ListItem.Title
              style={{
                color: item.result.status ? '#63A998' : '#DA6A66',
                fontSize: 10,
              }}>
              {' '}
              {item.result.text}
            </ListItem.Title>
          </ListItem.Content>

          <ListItem.Content style={{marginRight: 80}}>
            <Avatar
              size={'small'}
              source={images.guns[item.your.gun].uri}
              containerStyle={{width: images.guns[item.your.gun].width}}
              avatarStyle={{resizeMode: 'stretch'}}
            />
            <ListItem.Subtitle style={{color: 'white', fontSize: 8}}>
              {' '}
              {item.your.armor}{' '}
            </ListItem.Subtitle>
          </ListItem.Content>

          <ListItem.Content>
            <ListItem.Title style={{color: 'white', fontSize: 8}}>
              {' '}
              {item.your.damage.td}{' '}
            </ListItem.Title>
            <ListItem.Subtitle style={{color: 'white', fontSize: 5}}>
              {' '}
              Total Damage{' '}
            </ListItem.Subtitle>
          </ListItem.Content>

          <DamageDistribituon
            head={item.rival.damage.hs ? 'white' : 'transparent'}
            body={item.rival.damage.bs ? 'white' : 'transparent'}
            legs={item.rival.damage.ls ? 'white' : 'transparent'}
          />
          <ListItem.Content>
            <ListItem.Title
              style={{
                color: item.rival.damage.hs != 0 ? 'white' : 'gray',
                fontSize: 11,
              }}>
              {item.rival.damage.hs}
            </ListItem.Title>
            <ListItem.Title
              style={{
                color: item.rival.damage.bs != 0 ? 'white' : 'gray',
                fontSize: 11,
              }}>
              {item.rival.damage.bs}
            </ListItem.Title>
            <ListItem.Title
              style={{
                color: item.rival.damage.ls != 0 ? 'white' : 'gray',
                fontSize: 11,
              }}>
              {item.rival.damage.ls}
            </ListItem.Title>
          </ListItem.Content>

          <ListItem.Content>
            <ListItem.Title style={{color: 'white', fontSize: 8}}>
              {' '}
              10m{' '}
            </ListItem.Title>
          </ListItem.Content>

          <DamageDistribituon
            head={item.your.damage.hs ? 'white' : 'transparent'}
            body={item.your.damage.bs ? 'white' : 'transparent'}
            legs={item.your.damage.ls ? 'white' : 'transparent'}
          />
          <ListItem.Content>
            <ListItem.Title
              style={{
                color: item.your.damage.hs != 0 ? 'white' : 'gray',
                fontSize: 11,
              }}>
              {item.your.damage.hs}
            </ListItem.Title>
            <ListItem.Title
              style={{
                color: item.your.damage.bs != 0 ? 'white' : 'gray',
                fontSize: 11,
              }}>
              {item.your.damage.bs}
            </ListItem.Title>
            <ListItem.Title
              style={{
                color: item.your.damage.ls != 0 ? 'white' : 'gray',
                fontSize: 11,
              }}>
              {item.your.damage.ls}
            </ListItem.Title>
          </ListItem.Content>

          <ListItem.Content>
            <ListItem.Title style={{color: 'white', fontSize: 8}}>
              {' '}
              {item.rival.damage.td}{' '}
            </ListItem.Title>
            <ListItem.Subtitle style={{color: 'white', fontSize: 5}}>
              {' '}
              Total Damage{' '}
            </ListItem.Subtitle>
          </ListItem.Content>

          <ListItem.Content style={{marginRight: 80}}>
            <Avatar
              size={'small'}
              source={images.guns[item.rival.gun].uri}
              containerStyle={{width: images.guns[item.rival.gun].width}}
              avatarStyle={{resizeMode: 'stretch'}}
            />
            <ListItem.Subtitle style={{color: 'white', fontSize: 8}}>
              {' '}
              {item.rival.armor}{' '}
            </ListItem.Subtitle>
          </ListItem.Content>
        </View>
      </RenderItem>
    );
  };
  render() {
    return (
      <BackgroundImg>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={perf}
          renderItem={this.renderItem}
        />
      </BackgroundImg>
    );
  }
}

const styles = StyleSheet.create({});
