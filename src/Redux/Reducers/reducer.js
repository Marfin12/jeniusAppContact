import Constants from '../../Constants';

const { DARK_THEME, LIGHT_THEME } = Constants.THEME;
const initialState = { theme: false };

export default (theme = initialState, action) => {
  switch (action.type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return { theme };
  }
};
