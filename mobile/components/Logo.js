import React from 'react'
import { View, StyleSheet } from 'react-native';
import BlackColorLogo from '../assets/black-logo';
import WhiteColorLogo from '../assets/white-logo';

const Logo = ({ blackLogo, whiteLogo, size }) => {

    const getSize = () => {
        switch (size){
          case 's':
            return styles.small;
          case 'm':
            return styles.medium;
          case 'l':
                return styles.large;
          default:
            return styles.small;
        }
      }
  return (
    <View >
        {blackLogo && <BlackColorLogo size={getSize()}/>}
        {whiteLogo && <WhiteColorLogo size={getSize()} />} 
    </View> 
  );
}

const styles = StyleSheet.create({
    small: {
        width: 127, 
        height: 35
    },

    medium: {
        width: 191, 
        height: 53
    },

    large: {
        width: 254, 
        height: 70
    }
})

export default Logo



