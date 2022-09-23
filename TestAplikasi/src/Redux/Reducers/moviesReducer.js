const initialState = {
  popular: [],
  nowPlaying: [],
  topRated: [],
  upComing: [],
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
  }
  return state;
};
