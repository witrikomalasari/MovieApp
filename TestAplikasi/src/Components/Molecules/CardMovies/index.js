import React, {useState} from 'react';
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
import {IMAGE_URL} from '../../../Config/API_Host';
import {fonts} from '../../../Utils';
import {Gap, SubCategory} from '../../Atoms';

const {width, height} = Dimensions.get('window');

const CardMovies = ({image, titleMovie, titleCategory, ...props}) => {
  const [isAPIbusy, setAPIBusy] = useState(false);

  const handleToMovieDetail = movieId => {
    props.navigation.navigate('Detail', {
      movieId,
    });
  };

  const renderPoster = ({item}) => (
    <TouchableOpacity
      style={styles.content}
      onPress={() => handleToMovieDetail(item.id)}>
      <Image
        source={{
          uri: `${IMAGE_URL}${item.poster_path}`,
        }}
        style={styles.image}
      />
      <Gap height={5} />
      <Text style={styles.txt} numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SubCategory titleCategory={titleCategory} />
      {props.data.length > 0 ? (
        !isAPIbusy ? (
          <FlatList
            data={props.data}
            renderItem={renderPoster}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator />
        )
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 16}}>
            Opps...Movie not found!
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardMovies;

const styles = StyleSheet.create({
  container: {backgroundColor: '#ffffff', marginBottom: 20},
  content: {
    width: width - 270,
    height: 200,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 7},
    // shadowOpacity: 0.5,
    // shadowRadius: 8,
    // elevation: 14,
    overflow: 'hidden',
    marginRight: 8,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  txt: {
    color: 'black',
    fontSize: 12,
    fontFamily: fonts.primary['700'],
    textAlign: 'center',
  },
});
