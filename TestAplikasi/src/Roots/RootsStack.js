import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Detail, PlayVideo, SplashScreen} from './../Pages';
import {MainTab} from './TabNavigator';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="PlayVideo" component={PlayVideo} />
    </Stack.Navigator>
  );
};

export default RootStack;
