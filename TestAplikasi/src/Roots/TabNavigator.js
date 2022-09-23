import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, WatchList} from '../Pages';
import {BottomNavigator} from './../Components';

const TabNav = createBottomTabNavigator();

export const MainTab = () => {
  return (
    <TabNav.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNavigator {...props} />}>
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="WatchList" component={WatchList} />
      <TabNav.Screen name="Profile" component={Profile} />
    </TabNav.Navigator>
  );
};
