import React, {useEffect} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
      <ImageBackground source={splash}>
        <Gap height={38} />
        <Text style={styles.text}>Movie</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    // backgroundColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'},
});
