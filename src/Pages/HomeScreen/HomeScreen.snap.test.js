import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';

import { apolloObjectCreator, apolloMapCreator } from '../UtilsTest';
import HomeScreen from './HomeScreen';

jest.mock('../../Components/TextField', () => 'TextField');
jest.mock('../../Components/Card', () => 'Card');
jest.mock('../../Components/FloatButton', () => 'FloatButton');
jest.mock('../../Components/Loading', () => 'Loading');
jest.mock('../../Components/HeaderList', () => 'HeaderList');

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

let HomeComponent;

afterEach(() => {
  jest.clearAllMocks();
});

describe('Home Screen Component with loading', () => {
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

  beforeEach(() => {
    client.watchQuery = jest.fn(() => ({
      ...mockedApolloConfig,
      currentResult: jest.fn().mockImplementation(() => ({
        ...mockedApolloConfig.currentResult,
        loading: true,
      })),
    }));
  });

  HomeComponent = (
    <ApolloProvider client={client}>
      <HomeScreen navigation={navigation} />
    </ApolloProvider>
  );

  test('renders light mode home screen', () => {
    const ScreenWrapper = renderer.create(HomeComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });

  test('renders dark mode home screen', () => {
    const ScreenWrapper = renderer.create(HomeComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });
});

describe('Home Screen Component with failed to fetch', () => {
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

  beforeEach(() => {
    const getListContact = [];

    client.watchQuery = jest.fn(() => ({
      variables: getListContact,
      ...mockedApolloConfig,
      currentResult: jest.fn().mockImplementation(() => ({
        ...mockedApolloConfig.currentResult,
        data: apolloObjectCreator(getListContact),
      })),
    }));
  });

  HomeComponent = (
    <ApolloProvider client={client}>
      <HomeScreen navigation={navigation} />
    </ApolloProvider>
  );

  test('renders light mode home screen', () => {
    const ScreenWrapper = renderer.create(HomeComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });

  test('renders dark mode home screen', () => {
    const ScreenWrapper = renderer.create(HomeComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });
});

describe('Home Screen Component with successfully fetch', () => {
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

  beforeEach(() => {
    const getListContact = [
      {
        firstName: 'Marfin',
        lastName: 'Fadhilah',
        age: 12,
        photo: 'example'
      }
    ];

    client.watchQuery = jest.fn(() => ({
      variables: getListContact,
      ...mockedApolloConfig,
      currentResult: jest.fn().mockImplementation(() => ({
        ...mockedApolloConfig.currentResult,
        data: apolloObjectCreator(getListContact),
      })),
    }));
  });

  HomeComponent = (
    <ApolloProvider client={client}>
      <HomeScreen navigation={navigation} />
    </ApolloProvider>
  );

  test('renders light mode home screen', () => {
    const ScreenWrapper = renderer.create(HomeComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });

  test('renders dark mode home screen', () => {
    const ScreenWrapper = renderer.create(HomeComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });
});
