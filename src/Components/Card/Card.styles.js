import colors from '../../Assets/Colors';

const styles = {
  container: (whiteTheme) => ({
    flex: 1,
    flexDirection: 'row',
    backgroundColor: whiteTheme ? colors.darkHeavyGray : colors.whitePrimary,
  }),
};

export default styles;
