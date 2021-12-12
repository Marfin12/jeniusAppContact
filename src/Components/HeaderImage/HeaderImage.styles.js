import colors from '../../Assets/Colors';

const styles = {
  container: (darkTheme) => ({
    borderColor: darkTheme ? colors.darkHeavyGray : colors.lightHeavyGray,
    borderBottomWidth: 3,
  }),
  image: {
    width: 36,
    height: 36
  }
};

export default styles;
