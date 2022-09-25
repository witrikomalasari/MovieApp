import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {colors, fonts} from '../../../Utils';

const {width} = Dimensions.get('window');
const Loading = ({size}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colors.loading} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary['700'],
    marginTop: 40,
  },
});
