import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPopularAction} from '../../Redux/Actions';

const Home = () => {
  const dispatch = useDispatch();
  const {popular, nowPlaying, topRated, upComing} = useSelector(
    state => state.moviesReducer,
  );

  useEffect(() => {
    dispatch(getPopularAction());
  }, []);

  console.log(
    'ini data useselector POPULER HOME',
    JSON.stringify(popular, null, 2),
  );
  return (
    <View>
      <Text style={{color: 'red'}}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
