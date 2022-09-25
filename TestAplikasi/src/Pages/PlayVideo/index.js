import React, {useCallback, useState} from 'react';
import {Alert, Button, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useSelector} from 'react-redux';
import {Gap} from '../../Components';
import {colors} from '../../Utils';

const PlayVideo = () => {
  const movieKey = useSelector(state => state.moviesReducer.movieId);
  const [playing, setPlaying] = useState(false);
  const loading = useSelector(state => state.globalReducer);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  // console.log('movieKey', movieKey);

  return (
    <View style={{flex: 1, backgroundColor: '#020202'}}>
      <Gap height={20} />
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={
          movieKey.length > 0 ? movieKey[1] : 'Trailer Video Tidak Tersedia'
        }
        // playList={[movieKey[0], movieKey[1]]}
        onChangeState={onStateChange}
      />
      <Button
        color={colors.background.primary}
        title={playing ? 'pause' : 'play'}
        onPress={togglePlaying}
      />
    </View>
  );
};

export default PlayVideo;
