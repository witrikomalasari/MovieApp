import React, {useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {Gap} from '../../Components/Atoms';
import {IMAGE_URL} from '../../Config/API_Host';
import {
  getDetailMovie,
  getVideoMovie,
  movieKey,
} from '../../Redux/Actions/MoviesAction';

const Detail = props => {
  console.log('route', props.route.params);

  const dispatch = useDispatch();
  const detailMovie = useSelector(state => state.moviesReducer.detail);
  const loading = useSelector(state => state.globalReducer);
  const {video} = useSelector(state => state.moviesReducer);

  const movieID = props.route.params.movieId;
  const movieVideo = video.map((vid, id) => vid.key);

  useEffect(() => {
    dispatch(getDetailMovie(movieID));
    dispatch(getVideoMovie(movieID));
    dispatch(movieKey(movieVideo[0]));
    // dispatch(setLoading(false));
  }, [movieID]);

  console.log('ISI DETAIL', JSON.stringify(movieVideo[0], null, 2));

  const renderHeaderSection = () => (
    <ImageBackground
      source={{uri: `${IMAGE_URL}/${detailMovie.backdrop_path}`}}
      resizeMode="cover"
      style={{
        width: '100%',
        height: 450,
      }}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['transparent', '#000']}
          style={{
            width: '100%',
            height: 200,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {detailMovie.title}
          </Text>
          {renderVideoAndRating()}
        </LinearGradient>
      </View>
    </ImageBackground>
  );

  const renderVideoAndRating = () => (
    <View
      style={{
        // backgroundColor: 'yellow',
        marginTop: -15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.categoryContainer,
            {
              width: 130,
              height: 60,
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.2)',
              bottom: 150,
              right: 10,
              marginHorizontal: -75,
            },
          ]}
          onPress={async () => {
            await dispatch(movieKey(movieVideo));
            props.navigation.navigate('PlayVideo');
          }}>
          <AntDesign name="caretright" color="white" size={35} />
          <Text
            style={{
              color: '#fcfcfa',
              fontSize: 14,
              marginHorizontal: 5,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Play Trailer
          </Text>
        </TouchableOpacity>
      </View>
      <Gap height={20} />
      <View style={styles.categoryContainer}>
        <AntDesign name="star" color="yellow" size={15} />
        <Text style={{color: 'white', fontSize: 12, marginHorizontal: 5}}>
          {detailMovie.vote_average}
        </Text>
      </View>
      <Gap height={20} />
    </View>
  );
  // console.log('loading', loading);
  return (
    <>
      {loading ? (
        <View>
          <ScrollView
            contentContainerStyle={{
              backgroundColor: 'white',
              // paddingHorizontal: 5,
              paddingBottom: 40,
            }}>
            {renderHeaderSection()}
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: 'bold',
                  marginVertical: 10,
                }}>
                Overview
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  textAlign: 'justify',
                }}>
                {detailMovie.overview}
              </Text>
            </View>
          </ScrollView>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
