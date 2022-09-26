import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardMovies, CarouselRN, Gap, Header, Loading} from '../../Components';
import {IMAGE_URL} from '../../Config/API_Host';
import {
  getNowPlayingAction,
  getPopularAction,
  getTopRatedAction,
  getUpComingAction,
} from '../../Redux/Actions';
import {colors} from '../../Utils';

const {height} = Dimensions.get('window');

const Home = props => {
  const dispatch = useDispatch();
  const [searchTextInput, setSearchTextInput] = useState('');
  const loading = useSelector(state => state.globalReducer.isLoading);
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
    let filterMovies = movie.filter(mov =>
      mov.title.toLowerCase().includes(searchTextInput.toLowerCase()),
    );
    return filterMovies;
  };

  const handleFilterMovie = movie => {
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
    return filterMovies;
  };

  const renderCardMovie = movies.map((movie, i) => (
    <CardMovies
      key={i}
      titleCategory={movie.title}
      data={
        searchTextInput.length > 0
          ? handleFilterMovie(movie.data)
          : movie.data.slice(0, 10)
      }
      navigation={props.navigation}
    />
  ));

  const renderItemCarousel = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <ImageBackground
          source={{uri: `${IMAGE_URL}${item.backdrop_path}`}}
          style={{flex: 1}}>
          <Text
            style={{
              color: colors.text.white,
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 5,
              paddingLeft: 10,
              top: 140,
            }}>
            {item.title}
          </Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.page}>
      {!loading ? (
        <>
          <Header
            placeholder="Cari Perkata ( Contoh: batman ) ....."
            placeholderTextColor={colors.text.secondary}
            value={searchTextInput}
            onChangeText={text => {
              setSearchTextInput(text);
            }}
            onDelete={() => setSearchTextInput('')}
          />
          <View style={[styles.wrapperCard, {flex: 1}]}>
            <CarouselRN
              autoPlay={true}
              duration={1000}
              data={movies[0].data}
              // onSnapToItem={index => setIndexCarousel(index)}
              renderItem={renderItemCarousel}
            />
          </View>
          <Gap height={8} />
          <View style={styles.wrapperCard}>{renderCardMovie}</View>
        </>
      ) : (
        <View
          style={[
            styles.page,
            {
              paddiHorizontal: -8,
              height,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Loading size="large" />
        </View>
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background.white,
    paddingHorizontal: 8,
  },
  wrapperCard: {
    marginHorizontal: -8,
  },
});
