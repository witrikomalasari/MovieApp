import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
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
  const isLoading = useSelector(state => state.globalReducer);
  const movies = [
    {
      title: 'Top Rated',
      data: useSelector(state => state.moviesReducer.topRated),
    },
    {
      title: 'Popular',
      data: useSelector(state => state.moviesReducer.popular),
    },
    {
      title: 'Now Playing',
      data: useSelector(state => state.moviesReducer.nowPlaying),
    },
    {
      title: 'Up Coming',
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

  const renderCardMovie = movies.map((movie, i) => {
    // console.log('dafd', JSON.stringify(movie, null, 2));

    const title = movie.title.replace(' ', '');

    return (
      <View key={i}>
        {isLoading && movie.data.length > 0 ? (
          <CardMovies
            key={i}
            titleCategory={movie.title}
            data={
              searchTextInput.length > 0
                ? handleFilterMovie(movie.data)
                : movie.data.slice(0, 10)
            }
            navigation={props.navigation}
            onPress={() => props.navigation.navigate(title)}
          />
        ) : (
          <View key={i}>
            <ActivityIndicator size="small" key={movie.data.id} />
            <Text style={{color: 'black'}}>Sedang memuat...</Text>
          </View>
        )}
      </View>
    );
  });

  const renderItemCarousel = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <ImageBackground
          source={{uri: `${IMAGE_URL}${item.backdrop_path}`}}
          style={{flex: 1}}
          resizeMode="cover">
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

  // console.log('adgad', JSON.stringify(movies[0].data, null, 2));
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Header
        placeholder="Search movie ....."
        placeholderTextColor={colors.text.secondary}
        value={searchTextInput}
        onChangeText={text => {
          setSearchTextInput(text);
        }}
        onDelete={() => setSearchTextInput('')}
      />
      <View style={[styles.wrapperCard, {flex: 1}]}>
        <CarouselRN
          key={movies[0].id}
          autoPlay={true}
          duration={1000}
          data={movies[0].data}
          // onSnapToItem={index => setIndexCarousel(index)}
          renderItem={renderItemCarousel}
        />
      </View>
      <View style={styles.wrapperCard}>{renderCardMovie}</View>
      <Gap height={20} />
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
