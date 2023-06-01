import React from 'react';
import { StyleSheet, View } from 'react-native';

const ContainerBox = ({
  size,
  mood
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox} />
      <View />
    </View>
  )
};

const styles = StyleSheet.create({

  container: {
    width: 312,
    height: 524,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#000',
    position: 'relative',
    alignSelf: 'center',
    backgroundColor: '#F2F2F2',
  },

  redBox: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 312,
    height: 56,
    backgroundColor: '#ED4B58',
    borderWidth: 2,
    borderColor: '#000',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  // greyBox: {
  //   position: 'absolute',
  //   top: 53,
  //   left: -2,
  //   width: 312,
  //   height: 468,
  //   backgroundColor: '#F2F2F2',
  //   borderWidth: 2,
  //   borderColor: '#000',
  //   borderBottomLeftRadius: 16,
  //   borderBottomRightRadius: 16,
  // },

})

export default ContainerBox;