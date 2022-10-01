import React from 'react';
import {Text, View} from 'react-native';
import {CardMovies} from '../../Components';

const WatchList = props => {
  console.log('route', props.route.params);
  return (
    <View>
      <CardMovies
      // key={i}
      // titleCategory={movie.title}
      // data={movie.data.slice}
      // navigation={props.navigation}
      />
      <Text>WatchList</Text>
    </View>
  );
};

export default WatchList;
