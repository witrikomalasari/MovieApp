import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Button, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useDispatch, useSelector} from 'react-redux';
import {Gap} from '../../Components';
import {movieID, setLoading} from '../../Redux/Actions';

export default function App() {
  const dispatch = useDispatch();
  const movieKey = useSelector(state => state.moviesReducer.movieId);
  const [playing, setPlaying] = useState(false);
  const loading = useSelector(state => state.globalReducer);

  console.log('ini videokey', JSON.stringify(movieKey, null, 2));

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Gap height={20} />
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={
          movieKey.length > 0 ? movieKey[1] : 'Trailer Video Tidak Tersedia'
        }
        onChangeState={onStateChange}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
}
