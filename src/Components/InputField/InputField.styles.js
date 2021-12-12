const styles = {
  container: (darkTheme, darkMode, whiteMode) => ({
    color: darkTheme ? darkMode : whiteMode,
    marginTop: -22
  }),
  text: {
    fontSize: 20
  },
  input: {
    height: 40,
    marginTop: 16,
    marginLeft: -2,
    borderBottomWidth: 0.7
  },
};

export default styles;
