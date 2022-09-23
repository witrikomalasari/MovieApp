import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../Utils';
import Icon from 'react-native-vector-icons/FontAwesome';

const SplashScreen = () => {
  const myButton = (
    <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
      // onPress={this.loginWithFacebook}
    >
      Login with Facebook
    </Icon.Button>
  );

  const customTextButton = (
    <Icon.Button name="facebook" backgroundColor="#3b5998">
      <Text style={{fontFamily: 'Arial', fontSize: 15}}>
        Login with Facebook
      </Text>
    </Icon.Button>
  );

  return (
    <View>
      <Text style={styles.text}>SplashScreen</Text>
      <Icon name="rocket" size={30} color="#900" />
      {myButton}
      {customTextButton}
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
