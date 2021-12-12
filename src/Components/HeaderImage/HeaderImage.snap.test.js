import React from 'react';
import renderer from 'react-test-renderer';

import HeaderImage from './HeaderImage.component';
import config from './HeaderImage.config';

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

afterEach(() => {
  jest.resetAllMocks();
});

describe('Header List Component Default Theme', () => {
  const ComponentWrapper = renderer
    .create(<HeaderImage {...config.defaultProps} />)
    .toJSON();

  test('renders header list component light mode', () => {
    expect(ComponentWrapper).toMatchSnapshot();
  });
});

describe('Header List Component Dark Theme', () => {
  const ComponentWrapper = renderer
    .create(<HeaderImage {...config.defaultProps} />)
    .toJSON();

  test('renders header list component dark mode', () => {
    expect(ComponentWrapper).toMatchSnapshot();
  });
});
