import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardMovies, Header} from '../../Components';
import {
  getNowPlayingAction,
  getPopularAction,
  getTopRatedAction,
  getUpComingAction,
} from '../../Redux/Actions';

const Home = () => {
  const dispatch = useDispatch();
  const movies = [
    {
      title: 'TOP RATED',
      data: useSelector(state => state.moviesReducer.topRated),
    },
    {title: 'POPULAR', data: useSelector(state => state.moviesReducer.popular)},
    {
      title: 'NOW PLAYING',
      data: useSelector(state => state.moviesReducer.nowPlaying),
    },
    {
      title: 'UP COMING',
      data: useSelector(state => state.moviesReducer.upComing),
    },
  ];

  useEffect(() => {
    dispatch(getTopRatedAction());
    dispatch(getPopularAction());
    dispatch(getNowPlayingAction());
    dispatch(getUpComingAction());
  }, []);

  const renderCardMovie = movies.map((movie, i) => (
    <CardMovies
      key={i}
      titleCategory={movie.title}
      data={
        // searchTextInput || selectedGenres.length > 0
        // ? handleFilterMovie(movie.data)
        // :
        movie.data
      }
      // navigation={props.navigation}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Header />
      {renderCardMovie}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    // flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
  },
});
