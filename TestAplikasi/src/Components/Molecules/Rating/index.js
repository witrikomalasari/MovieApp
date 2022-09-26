import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IcStarOff, IcStarOn} from './../../../Assets';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= number) {
        star.push(<IcStarOn key={i} />);
      } else {
        star.push(<IcStarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>{renderStar()}</View>{' '}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {flexDirection: 'row'},
  starContainer: {flexDirection: 'row', marginRight: 4},
});
