import React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const {width, height} = Dimensions.get('window');

const CarouselRN = ({
  autoPlay,
  data,
  duration,
  onSnapToItem,
  renderItem,
  style,
}) => {
  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height={height / 3.5}
        autoPlay={autoPlay}
        data={data}
        scrollAnimationDuration={duration}
        onSnapToItem={onSnapToItem}
        renderItem={renderItem}
        style={style}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: 95,
        }}
        pagingEnabled={true}
      />
    </View>
  );
};

export default CarouselRN;
