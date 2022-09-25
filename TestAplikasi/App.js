import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import RootStack from './src/Roots/RootsStack';

const MainApp = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
