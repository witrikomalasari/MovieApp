import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Home, WatchList} from '../Pages';

const TabNav = createMaterialBottomTabNavigator();

export const MainTab = () => {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="WatchList" component={WatchList} />
    </TabNav.Navigator>
  );
};
