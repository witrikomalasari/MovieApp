import moment from 'moment/moment';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {IMAGE_URL} from '../../../Config/API_Host';
import {setLoading} from '../../../Redux/Actions';
import {colors, fonts} from '../../../Utils';
import {Gap, SubCategory} from '../../Atoms';

const {width} = Dimensions.get('window');

const CardMovies = props => {
  const handleToMovieDetail = async movieData => {
    props.navigation.navigate('Detail', {
      movieData,
    });
  };

  const handleReleaseDate = dateTime => {
    const releaseDate = moment(dateTime).format('ll');
    return releaseDate;
  };

  const renderPoster = ({item}) => {
    // console.log('item', item);
    return (
      <TouchableOpacity
        style={styles.content}
        onPress={() => {
          handleToMovieDetail(item);
        }}>
        <Image
          source={{
            uri: `${IMAGE_URL}${item.poster_path}`,
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <Gap height={5} />
        <Text style={styles.txt} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Gap height={2} />
        <Text style={[styles.txt, {fontSize: 11}]}>
          {handleReleaseDate(item.release_date)}
        </Text>
      </TouchableOpacity>
    );
  };

  // console.log('loading', isLoading);

  return (
    <View style={styles.container}>
      <Gap height={30} />
      <SubCategory
        titleCategory={props.titleCategory}
        navigation={props.onPress}
      />
      {props.data.length > 0 ? (
        <FlatList
          data={props.data}
          renderItem={renderPoster}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[styles.txt, {color: colors.text.secondary, fontSize: 14}]}>
            Opps...Movie not found!
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardMovies;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.white,
  },
  content: {
    width: width - 270,
    height: 230,
    backgroundColor: colors.background.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 6,
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: colors.text.primary,
    fontSize: 12,
    fontFamily: fonts.primary['700'],
    textAlign: 'center',
  },
});
