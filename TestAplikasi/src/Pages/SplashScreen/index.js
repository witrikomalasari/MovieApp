import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../Utils';

const SplashScreen = () => {
  return (
    <View>
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary['700'],
  },
});
