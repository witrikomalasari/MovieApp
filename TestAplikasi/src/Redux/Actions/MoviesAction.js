import Axios from 'axios';
import {API_KEY, API_URL} from '../../Config/API_Host';

export const getPopularAction = () => async dispatch => {
  let urlAPI = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const response = await Axios.get(urlAPI);
    // console.log('resultPOPULAR', JSON.stringify(response, null, 2));
    return dispatch({
      type: 'SET_POPULAR',
      value: response?.data?.results,
    });
  } catch (error) {
    console.log('DATA TIDAK DAPAT', error);
  }
};

export const getNowPlayingAction = () => async dispatch => {
  let urlAPI = `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const response = await Axios.get(urlAPI);

    return dispatch({
      type: 'SET_NOWPLAYING',
      value: response?.data?.results,
    });
  } catch (error) {
    console.log('DATA NOW PLAYING TIDAK DAPAT', error);
  }
};

export const getTopRatedAction = () => async dispatch => {
  let urlAPI = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const response = await Axios.get(urlAPI);

    return dispatch({
      type: 'SET_TOPRATED',
      value: response?.data?.results,
    });
  } catch (error) {
    console.log('DATA TOP RATED ACTION  TIDAK DAPAT', error);
  }
};

export const getUpComingAction = () => async dispatch => {
  let urlAPI = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const response = await Axios.get(urlAPI);

    return dispatch({
      type: 'SET_UPCOMING',
      value: response?.data?.results,
    });
  } catch (error) {
    console.log('DATA UP COMING TIDAK DAPAT', error);
  }
};

export const getDetailMovie = movieID => async dispatch => {
  let urlAPI = `${API_URL}/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
  try {
    const responseDetail = await Axios.get(urlAPI);

    return dispatch({
      type: 'SET_DETAIL_MOVIE',
      value: responseDetail?.data,
    });
  } catch (error) {
    console.log('DATA DETAIL TIDAK DAPAT', error);
  }
};

export const getVideoMovie = movieID => async dispatch => {
  let urlAPI = `${API_URL}/movie/${movieID}?api_key=${API_KEY}&append_to_response=videos`;
  try {
    const responseVideo = await Axios.get(urlAPI);

    return dispatch({
      type: 'SET_VIDEO',
      value: responseVideo.data.videos.results,
    });
  } catch (error) {
    console.log('data video tidak dapat', error);
  }
};

export const movieKey = videoID => async dispatch => {
  try {
    return await dispatch({
      type: 'SET_ID_VIDEO',
      value: videoID,
    });
  } catch (error) {
    console.log('video tuk playvideo tidak dapat', error);
  }
};

export const listWatchMovie = video => async dispatch => {
  const listVideo = [...video, video];

  return await dispatch({
    type: 'LIST_WATCH',
    value: listVideo,
  });
};
