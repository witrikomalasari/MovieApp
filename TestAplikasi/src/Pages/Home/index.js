import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardMovies, Gap, Header, Search} from '../../Components';
import {
  getNowPlayingAction,
  getPopularAction,
  getTopRatedAction,
  getUpComingAction,
} from '../../Redux/Actions';

const Home = props => {
  const dispatch = useDispatch();
  const [searchTextInput, setSearchTextInput] = useState('');
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

  const searchByTextInput = movie => {
    // console.log('searchByTextInput', movie);
    let filterMovies = movie.filter(mov =>
      mov.title.toLowerCase().includes(searchTextInput.toLowerCase()),
    );
    return filterMovies;
  };

  const handleFilterMovie = movie => {
    // console.log('handleFilterRegion', JSON.stringify(movie, null, 2));

    let filterMovies;
    if (searchTextInput.length > 0) {
      filterMovies = searchByTextInput(movie);
    }
    if (searchTextInput === 0) {
      filterMovies = searchByTextInput(movie);
    }
    if (!searchTextInput) {
      filterMovies = searchByTextInput(movie);
    }
    // console.log('search ini', filterMovies);
    return filterMovies;
  };

  // console.log('movie', filterMovies);

  const renderCardMovie = movies.map((movie, i) => (
    <CardMovies
      key={i}
      titleCategory={movie.title}
      data={
        searchTextInput.length > 0 ? handleFilterMovie(movie.data) : movie.data
      }
      navigation={props.navigation}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Header
        placeholder="Cari perkata (contoh: goblin)..."
        placeholderTextColor="black"
        value={searchTextInput}
        onChangeText={text => {
          // console.log('search', text);
          setSearchTextInput(text);
        }}
        onDelete={() => setSearchTextInput('')}
      />

      <Gap height={8} />
      <View style={styles.wrapperCardMovie}>{renderCardMovie}</View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
  },
  wrapperCardMovie: {
    marginHorizontal: -8,
  },
});
