import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/Roots/RootsStack';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';

const MainApp = () => {
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>;
};

export const App = () => {
  <Provider store={store}>
    <MainApp />
  </Provider>;
};
