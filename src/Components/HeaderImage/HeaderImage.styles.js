import colors from '../../Assets/Colors';

const styles = {
  container: (darkTheme) => ({
    borderColor: darkTheme ? colors.darkHeavyGray : colors.lightHeavyGray,
    borderBottomWidth: 3,
  }),
  image: {
    width: 50,
    height: 50
  }
};

export default styles;
