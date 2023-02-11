const palette = {
  black: "rgb(0, 0, 0)",
  white: "rgb(253, 253, 253)",
  orange: "rgb(242, 163, 59)",
  darkGray: "rgb(51, 51, 51)",
  lightGray: "rgb(165, 165, 165)",
};

const defaultTheme = {
  background: palette.black,
  color: palette.white,
  button: {
    background: {
      default: palette.darkGray,
      primary: palette.orange,
      secondary: palette.lightGray,
      disabled: palette.lightGray,
    },
    color: palette.white,
  },
};

const theme = {
  dark: {
    ...defaultTheme,
  },
  light: {
    ...defaultTheme,
    background: palette.white,
    color: palette.black,
  },
};

export { palette, theme };
