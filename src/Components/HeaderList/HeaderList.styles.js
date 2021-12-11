import colors from '../../Assets/Colors';

const styles = {
  container: (darkTheme) => ({
    borderColor: darkTheme ? colors.darkHeavyGray : colors.lightHeavyGray,
    borderBottomWidth: 3,
  }),
  text: (darkTheme) => ({
    fontSize: 20,
    fontWeight: 'bold',
    color: darkTheme ? colors.lightMediumGray : colors.blackPrimary,
  }),
};

export default styles;
