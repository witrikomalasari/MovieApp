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
import {useDispatch, useSelector} from 'react-redux';
import {ModalRN} from '../../Components';
import {Gap} from '../../Components/Atoms';
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

  const movieID = props.route.params.movieId;
  const movieVideo = video.map(vid => vid.key);

  useEffect(() => {
    dispatch(getDetailMovie(movieID));
    dispatch(getVideoMovie(movieID));
    // dispatch(movieKey(movieVideo[0]));
  }, [movieID]);

  console.log('movieVideo', movieVideo[0]);

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
            await dispatch(movieKey(movieVideo));
            // await dispatch(setLoading(true));
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
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: 12,
              }}>
              <TouchableOpacity>
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
            </View>
          </View>
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
        transparant={true}
        visible={isShow}
        onPress={() => {
          setIsShow(!isShow);
        }}
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
