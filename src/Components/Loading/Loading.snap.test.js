import React from 'react';
import renderer from 'react-test-renderer';

import Loading from './Loading.component';
import config from './Loading.config';

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
      .mockImplementationOnce(() => lightMode)
      .mockImplementationOnce(() => darkMode)
      .mockImplementationOnce(() => darkMode),
  };
});

describe('Light Mode Text Field Component', () => {
  test('renders text field component with default props', () => {
    const ComponentWrapper = renderer
      .create(<Loading {...config.defaultProps} />)
      .toJSON();
    expect(ComponentWrapper).toMatchSnapshot();
  });
});

describe('Dark Mode Text Field Component', () => {
  test('renders text field component with default props', () => {
    const ComponentWrapper = renderer
      .create(<Loading {...config.defaultProps} />)
      .toJSON();
    expect(ComponentWrapper).toMatchSnapshot();
  });
});
