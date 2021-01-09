import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

RenderItem = ({children, ...props}) => {
  return (
    <ListItem
      containerStyle={{
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'transparent',
      }}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.85}
      ViewComponent={LinearGradient}
      {...props}>
      {children}
    </ListItem>
  );
};

export default RenderItem;
