import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {colors, fonts} from '../../../Utils';
import {Gap} from '../../Atoms';

const {width} = Dimensions.get('window');

const Loading = ({size, type}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.loading} />
      <Gap height={10} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    width,
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // bottom: 0,
    top: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.text.white,
    fontFamily: fonts.primary['700'],
    marginTop: 40,
  },
});
