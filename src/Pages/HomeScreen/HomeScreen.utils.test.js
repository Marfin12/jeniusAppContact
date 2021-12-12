import {
  navigateToInputScreen,
  navigateToProfileScreen
} from './HomeScreen.utils';

const mockedProps = {
  name: 'Sport example',
  photo: 'some image',
  description: 'This is good sport',
  navigation: {
    navigate: jest.fn()
  }
};

it('should navigate to input screen', () => {
  const expectedRoute = 'EDIT_SCREEN';
  const expectedProps = {
    props: mockedProps,
    isEdit: false,
    name: 'Save Contact'
  };

  navigateToInputScreen(mockedProps)();
  expect(mockedProps.navigation.navigate).toHaveBeenCalledWith(
    expectedRoute,
    expectedProps
  );
});

it('should navigate to profile screen', () => {
  const expectedRoute = 'PROFILE_SCREEN';
  const expectedProps = {
    item: {},
    navigation: mockedProps.navigation
  };

  navigateToProfileScreen(expectedProps.item, mockedProps.navigation)();
  expect(mockedProps.navigation.navigate).toHaveBeenCalledWith(
    expectedRoute,
    expectedProps
  );
});
