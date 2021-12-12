import Constants from '../../Constants';

const { SCREEN: { PROFILE, SAVE } } = Constants;

const navigateToProfileScreen = (item, navigation) => () => {
  navigation.navigate(PROFILE.ROUTE_NAME, { item, navigation });
};

const navigateToInputScreen = (props) => () => {
  props.navigation.navigate(SAVE.ROUTE_NAME, {
    props,
    isEdit: false,
    name: SAVE.TITLE
  });
};

export { navigateToProfileScreen, navigateToInputScreen };
