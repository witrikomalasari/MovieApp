const initState = {
  isLoading: false,
  // isError: false,
  // message: 'Error',
};

export const globalReducer = (state = initState, action) => {
  const {type, value} = action;

  switch (type) {
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: value,
      };
    }
  }
  return state;
};
