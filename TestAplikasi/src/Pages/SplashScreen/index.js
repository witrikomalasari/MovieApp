import React, {useEffect} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {splash} from '../../Assets';
import {Gap} from '../../Components';

const {width, height} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'MainTab'}]});
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={splash} style={{width, height}}>
        <Gap height={38} />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
