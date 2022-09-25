const mainColors = {
  primary: '#D9435E',
  dark: '#020202',
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
    greyBold: mainColors.grey1,
    white: mainColors.white,
  },

  text: {
    primary: mainColors.dark,
    secondary: mainColors.grey1,
    white: mainColors.white,
  },
  button: {
    primary: {
      background: mainColors.primary,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.grey1,
      text: mainColors.dark,
    },
  },
  border: {
    primary: mainColors.grey2,
  },
};
