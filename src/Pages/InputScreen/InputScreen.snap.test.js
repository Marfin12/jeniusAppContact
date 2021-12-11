import React from 'react';
import renderer from 'react-test-renderer';
import DetailsScreen from './DetailsScreen';

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  const lightMode = {
    theme: false,
  };
  const darkMode = {
    theme: true,
  };
  return {
    ...ActualReactRedux,
    useSelector: jest
      .fn()
      .mockImplementationOnce(() => lightMode)
      .mockImplementationOnce(() => darkMode),
  };
});
jest.mock('../../Components/TextField', () => 'TextField');

const route = {
  params: {
    props: {
      name: 'Sport Example',
      image: 'photo of img',
      description: 'some description',
    },
  },
};

test('renders detail screen light mode', () => {
  const ScreenWrapper = renderer
    .create(<DetailsScreen route={route} />)
    .toJSON();
  expect(ScreenWrapper).toMatchSnapshot();
});

test('renders detail screen dark mode', () => {
  const ScreenWrapper = renderer
    .create(<DetailsScreen route={route} />)
    .toJSON();
  expect(ScreenWrapper).toMatchSnapshot();
});
