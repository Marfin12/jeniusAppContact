const styles = {
  text: (darkTheme, darkMode, whiteMode) => ({
    color: darkTheme ? darkMode : whiteMode,
  }),
  input: {
    height: 30,
    borderBottomWidth : 0.8
  }
};

export default styles;
