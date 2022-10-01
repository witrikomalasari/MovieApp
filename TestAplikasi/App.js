import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {Loading} from './src/Components';
import store from './src/Redux/Store';
import RootStack from './src/Roots/RootsStack';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);

  return (
    <NavigationContainer>
      <RootStack />
      {isLoading && <Loading />}
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
