import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';

import InputScreen from './InputScreen';
import config from './InputScreen.config'
import { apolloMapCreator } from '../UtilsTest';

jest.mock('../../Components/TextField', () => 'TextField');
jest.mock('../../Components/Card', () => 'Card');
jest.mock('../../Components/FloatButton', () => 'FloatButton');
jest.mock('../../Components/Loading', () => 'Loading');
jest.mock('../../Components/InputField', () => 'InputField');

const navigation = {
  addListener: jest.fn()
};
const client = {
  watchQuery: jest.fn(),
  refetch: false,
};
const mockedApolloConfig = {
  refetch: jest.fn(),
  fetchMore: jest.fn(),
  updateQuery: jest.fn(),
  startPolling: jest.fn(),
  stopPolling: jest.fn(),
  subscribeToMore: jest.fn(),
  options: {
    fetchPolicy: 'no-cache',
  },
  queryManager: {
    queryStore: apolloMapCreator(),
  },
  queryId: 123,
  subscribe: jest.fn(),
  currentResult: {
    loading: false,
    partial: true,
    networkStatus: 'ready',
    errors: null,
    error: null,
  },
};

let InputComponent;

afterEach(() => {
  jest.clearAllMocks();
});

describe('Input Screen Component with loading', () => {
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

  let mockedProps;

  beforeEach(() => {
    client.watchQuery = jest.fn(() => ({
      ...mockedApolloConfig,
      currentResult: jest.fn().mockImplementation(() => ({
        ...mockedApolloConfig.currentResult,
        loading: true,
      })),
    }));
    mockedProps = {
      route: {
        params: {
          isEdit: false,
          props: {
            item: config.defaultItem
          }
        }
      }
    }
  });

  test('renders light mode input screen', () => {
    InputComponent = (
      <ApolloProvider client={client}>
        <InputScreen {...mockedProps} navigation={navigation} />
      </ApolloProvider>
    );

    const ScreenWrapper = renderer.create(InputComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });

  test('renders dark mode input screen', () => {
    InputComponent = (
      <ApolloProvider client={client}>
        <InputScreen {...mockedProps} navigation={navigation} />
      </ApolloProvider>
    );

    const ScreenWrapper = renderer.create(InputComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });
});

describe('input Screen Component with failed to fetch', () => {
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

  let mockedProps;

  beforeEach(() => {
    client.watchQuery = jest.fn(() => ({
      ...mockedApolloConfig,
      currentResult: jest.fn().mockImplementation(() => ({
        ...mockedApolloConfig.currentResult,
        loading: true,
      })),
    }));
    mockedProps = {
      route: {
        params: {
          isEdit: false,
          props: {
            item: config.defaultItem
          }
        }
      }
    }
  });

  test('renders light mode input screen', () => {
    InputComponent = (
      <ApolloProvider client={client}>
        <InputScreen {...mockedProps} navigation={navigation} />
      </ApolloProvider>
    );

    const ScreenWrapper = renderer.create(InputComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });

  test('renders dark mode input screen', () => {
    InputComponent = (
      <ApolloProvider client={client}>
        <InputScreen {...mockedProps} navigation={navigation} />
      </ApolloProvider>
    );

    const ScreenWrapper = renderer.create(InputComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });
});

describe('input Screen Component with successfully fetch', () => {
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

  let mockedProps;

  beforeEach(() => {
    client.watchQuery = jest.fn(() => ({
      ...mockedApolloConfig,
      currentResult: jest.fn().mockImplementation(() => ({
        ...mockedApolloConfig.currentResult,
        loading: true,
      })),
    }));
    mockedProps = {
      route: {
        params: {
          isEdit: false,
          props: {
            item: config.defaultItem
          }
        }
      }
    }
  });

  test('renders light mode input screen', () => {
    InputComponent = (
      <ApolloProvider client={client}>
        <InputScreen {...mockedProps} navigation={navigation} />
      </ApolloProvider>
    );

    const ScreenWrapper = renderer.create(InputComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });

  test('renders dark mode input screen', () => {
    InputComponent = (
      <ApolloProvider client={client}>
        <InputScreen {...mockedProps} navigation={navigation} />
      </ApolloProvider>
    );

    const ScreenWrapper = renderer.create(InputComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });
});
