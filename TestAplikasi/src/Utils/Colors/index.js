const mainColors = {
  primary: '#D9435E',
  secondary: '#020202',
  blue: '#859ED1',
  white: '#FAFAFC',
  grey1: '#737373',
  grey2: '#E5E5E5',
};

export const colors = {
  primary: mainColors.primary,
  loading: mainColors.blue,

  background: {
    primary: mainColors.primary,
    secondary: mainColors.blue,
    grey: mainColors.grey2,
  },

  text: {
    primary: mainColors.secondary,
    secondary: mainColors.grey1,
  },
  button: {
    primary: {
      background: mainColors.primary,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.grey1,
      text: mainColors.secondary,
    },
  },
  border: {
    primary: mainColors.grey2,
  },
};
