import Constants from '../../Constants';

const { SCREEN: { PROFILE, EDIT } } = Constants;

const navigateToProfileScreen = (navigation, props) => () => {
  navigation.navigate(PROFILE.ROUTE_NAME, { props });
};

const navigateToInputScreen = (props) => () => {
  props.navigation.navigate(EDIT.ROUTE_NAME, {
    props,
    isEdit: false
  });
};

const apolloObjectCreator = (sports) => ({
  length: sports.length,
  sports,
});

const apolloMapCreator = () => {
  const queryStore = new Map();
  queryStore.set({
    queryId: 123,
  });

  return queryStore;
};

export { navigateToProfileScreen, apolloObjectCreator, apolloMapCreator };
