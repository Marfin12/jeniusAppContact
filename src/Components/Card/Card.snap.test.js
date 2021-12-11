import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card.component';
import config from './Card.config';

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

afterEach(() => {
  jest.resetAllMocks();
});

describe('Card Component Default Theme', () => {
  const ComponentWrapper = renderer
    .create(<Card {...config.defaultProps} />)
    .toJSON();

  test('renders card component light mode', () => {
    expect(ComponentWrapper).toMatchSnapshot();
  });
});

describe('Card Component Dark Theme', () => {
  const ComponentWrapper = renderer
    .create(<Card {...config.defaultProps} />)
    .toJSON();

  test('renders card component dark mode', () => {
    expect(ComponentWrapper).toMatchSnapshot();
  });
});
