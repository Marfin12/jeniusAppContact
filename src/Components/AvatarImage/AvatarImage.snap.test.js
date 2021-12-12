import React from 'react';
import renderer from 'react-test-renderer';

import AvatarImage from './AvatarImage.component';
import config from './AvatarImage.config';

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
jest.useFakeTimers();

afterEach(() => {
  jest.resetAllMocks();
});

describe('Avatar Component Default Theme', () => {
  const ComponentWrapper = renderer
    .create(<AvatarImage {...config.defaultProps} />)
    .toJSON();

  test('renders avatar component light mode', () => {
    expect(ComponentWrapper).toMatchSnapshot();
  });

  const mockedProps = {
    ...config.defaultProps,
    image: 'https://thumbs.dreamstime.com/b/example-red-tag-example-red-square-price-tag-117502755.jpg'
  }
  const ComponentWrapperWithImageUrl = renderer
    .create(<AvatarImage {...mockedProps} />)
    .toJSON();

  test('renders avatar component image url mode', () => {
    expect(ComponentWrapperWithImageUrl).toMatchSnapshot();
  });
});

describe('Avatar Component Dark Theme', () => {
  const ComponentWrapper = renderer
    .create(<AvatarImage {...config.defaultProps} />)
    .toJSON();

  test('renders avatar component dark mode', () => {
    expect(ComponentWrapper).toMatchSnapshot();
  });
});
