import Constants from '../../Constants';

const { DARK_THEME, LIGHT_THEME } = Constants.THEME;

export const ToggleDarkTheme = () => ({
  type: DARK_THEME,
  payload: {
    theme: true,
  },
});
export const ToggleLightTheme = () => ({
  type: LIGHT_THEME,
  payload: {
    theme: false,
  },
});
export const ToggleTheme = (theme) => (dispatch) => {
  if (theme === DARK_THEME) {
    dispatch(ToggleDarkTheme());
  } else {
    dispatch(ToggleLightTheme());
  }
};
