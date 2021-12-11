import React from 'react';
import renderer from 'react-test-renderer';

import TextField from './TextField.component';
import config from './TextField.config';

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
      .create(<TextField {...config.defaultProps} />)
      .toJSON();
    expect(ComponentWrapper).toMatchSnapshot();
  });
  test('renders text field component with elipsis', () => {
    const ComponentWrapper = renderer
      .create(<TextField {...config.defaultProps} numberOfLines={1} />)
      .toJSON();
    expect(ComponentWrapper).toMatchSnapshot();
  });
});

describe('Dark Mode Text Field Component', () => {
  test('renders text field component with default props', () => {
    const ComponentWrapper = renderer
      .create(<TextField {...config.defaultProps} />)
      .toJSON();
    expect(ComponentWrapper).toMatchSnapshot();
  });
  test('renders text field component with elipsis', () => {
    const ComponentWrapper = renderer
      .create(<TextField {...config.defaultProps} numberOfLines={1} />)
      .toJSON();
    expect(ComponentWrapper).toMatchSnapshot();
  });
});
