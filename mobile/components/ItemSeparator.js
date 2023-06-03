import React from 'react';
import {View} from 'react-native';

const ItemSeparator = props => {
    return (
      <View
        style={{
          width: props.size,
          height: props.size,
        }}
      />
    );
  };
  
  export default ItemSeparator;