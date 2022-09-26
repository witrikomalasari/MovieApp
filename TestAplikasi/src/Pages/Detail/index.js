import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {ModalRn, Gap, ModalRN} from '../../Components';
import {IMAGE_URL} from '../../Config/API_Host';
import {
  getDetailMovie,
  getVideoMovie,
  movieKey,
} from '../../Redux/Actions/MoviesAction';
import {colors, fonts} from '../../Utils';

const Detail = props => {
  const dispatch = useDispatch();
  const detailMovie = useSelector(state => state.moviesReducer.detail);
  const loading = useSelector(state => state.globalReducer);
  const {video} = useSelector(state => state.moviesReducer);

  const [rating, setIsLike] = useState();
  const [isShow, setIsShow] = useState(false);

  const movieID = props.route.params.movieData.id;
  const movieAllData = props.route.params.movieData;
  const movieVideo = video.map(vid => vid.key);

  useEffect(() => {
    dispatch(getDetailMovie(movieID));
    dispatch(getVideoMovie(movieID));
    // dispatch(movieKey(movieVideo[0]));
  }, [movieID]);

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
              color: colors.text.white,
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

  let dataRating = detailMovie.vote_average;
  let totalRating = Math.round(dataRating);

  const renderVideoAndRating = () => (
    <View
      style={{
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
            // setLoading(false);
            await dispatch(movieKey(movieVideo));
            props.navigation.navigate('PlayVideo');
          }}>
          <AntDesign name="caretright" color="white" size={35} />
          <Text
            style={{
              color: colors.text.white,
              fontFamily: fonts.primary['700'],
              fontSize: 14,
              marginHorizontal: 8,
              textAlign: 'center',
            }}>
            Play Trailer
          </Text>
        </TouchableOpacity>
      </View>
      <Gap height={20} />
      <View style={styles.categoryContainer}>
        <AntDesign name="star" color="yellow" size={15} />
        <Text
          style={{color: colors.text.white, fontSize: 12, marginHorizontal: 5}}>
          {totalRating}
        </Text>
      </View>
      <Gap height={20} />
    </View>
  );

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // backgroundColor: 'green',
          paddingBottom: 40,
        }}>
        {renderHeaderSection()}
        <Gap height={10} />
        <View style={{marginHorizontal: 10}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: colors.text.primary,
                fontWeight: 'bold',
                marginVertical: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Overview
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: 12,
              }}>
              <TouchableOpacity
                style={{
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign
                  name="like1"
                  size={30}
                  color="black"
                  onPress={() => setIsShow(isShow)}
                />
                <Text
                  style={{
                    color: colors.text.primary,
                    fontFamily: fonts.primary['700'],
                    textAlign: 'center',
                  }}>
                  Like
                </Text>
              </TouchableOpacity>
              <Gap width={20} />
              <TouchableOpacity
                style={{
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcon
                  name="movie-filter"
                  size={30}
                  color="black"
                  // onPress={() => {
                  //   props.navigation.navigate('WatchList', {
                  //     movieAllData,
                  //   });
                  // }}
                />
                <Text
                  style={{
                    fontSize: 11,
                    color: colors.text.primary,
                    fontFamily: fonts.primary['700'],
                    textAlign: 'center',
                    // maxWidth: 50,
                  }}>
                  Add {'\n'} WatchList
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Gap height={10} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.primary['600'],
              color: colors.text.secondary,
              textAlign: 'justify',
            }}>
            {detailMovie.overview}
          </Text>
        </View>
      </ScrollView>
      <ModalRN
        // transparant={true}
        visible={isShow}
        // onPress={() => {
        //   console.log('coba');
        //   setIsShow(!isShow);
        // }}
        style={{height: 100, backgroundColor: 'red'}}
      />
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background.greyBold,
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
