const initialState = {
  popular: [],
  nowPlaying: [],
  topRated: [],
  upComing: [],
  detail: [],
};

export const moviesReducer = (state = initialState, action) => {
  const {type, value} = action;
  // console.log('omo value', value);

  switch (type) {
    case 'SET_POPULAR':
      return {
        ...state,
        popular: value,
      };
    case 'SET_NOWPLAYING':
      return {
        ...state,
        nowPlaying: value,
      };
    case 'SET_TOPRATED':
      return {
        ...state,
        topRated: value,
      };
    case 'SET_UPCOMING':
      return {
        ...state,
        upComing: value,
      };
    case 'SET_DETAIL_MOVIE':
      return {
        ...state,
        detail: value,
      };
  }
  return state;
};
