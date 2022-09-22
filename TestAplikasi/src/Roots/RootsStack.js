import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from './../Pages';
import {TabNavigator} from './TabNavigator';

const Stack = createStackNavigator();

export const RootStack = () => {
  <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="MainApp" component={TabNavigator} />
  </Stack.Navigator>;
};
