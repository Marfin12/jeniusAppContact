import React from 'react';
import renderer from 'react-test-renderer';

import FloatButton from './FloatButton.component';
import config from './FloatButton.config';

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
jest.mock('../../Components/Card', () => 'Card');
jest.mock('../../Assets/Images', () => 'Images');

afterEach(() => {
  jest.resetAllMocks();
});

describe('Float button Component Default Theme', () => {
  const ComponentWrapper = renderer
    .create(<FloatButton {...config.defaultProps} />)
    .toJSON();
  
  console.log(ComponentWrapper)

  test('renders float button component light mode', () => {
    expect(ComponentWrapper).toMatchSnapshot();
  });
});

describe('float button Component Dark Theme', () => {
  const ComponentWrapper = renderer
    .create(<FloatButton {...config.defaultProps} />)
    .toJSON();

  test('renders float button component dark mode', () => {
    expect(ComponentWrapper).toMatchSnapshot();
  });
});
