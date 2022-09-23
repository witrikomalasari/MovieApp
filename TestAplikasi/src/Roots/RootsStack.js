import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Detail, SplashScreen} from './../Pages';
import {MainTab} from './TabNavigator';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default RootStack;
