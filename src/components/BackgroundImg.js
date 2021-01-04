import React from 'react';
import {ImageBackground} from 'react-native';

BackgroundImg = ({children, ...props}) => {
  return (
    <ImageBackground
      source={require('../assets/images/background/home_background.jpg')}
      style={{
        paddingTop: 50,
        flex: 1,
        resizeMode: 'cover',
        paddingBottom: 57,
        ...props,
      }}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImg;
