import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

const ContainerBox = ({
  title, content
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}><Text>{title}</Text></View>
      <View style={styles.greyBox}><Text>{content}</Text></View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  greyBox: {
    marginTop: 56,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ContainerBox;