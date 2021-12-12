import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';

import { apolloObjectCreator, apolloMapCreator } from '../UtilsTest';
import ProfileScreen from './ProfileScreen';

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

let ProfileComponent;

afterEach(() => {
  jest.clearAllMocks();
});

describe('profile Screen Component with loading', () => {
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

  let mockedProps = {
    route: {
      params: {
        item: {
          id: 1
        }
      }
    }
  }

  beforeEach(() => {
    client.watchQuery = jest.fn(() => ({
      ...mockedApolloConfig,
      currentResult: jest.fn().mockImplementation(() => ({
        ...mockedApolloConfig.currentResult,
        loading: true,
      })),
    }));
  });

  ProfileComponent = (
    <ApolloProvider client={client}>
      <ProfileScreen {...mockedProps} navigation={navigation} />
    </ApolloProvider>
  );

  test('renders light mode profile screen', () => {
    const ScreenWrapper = renderer.create(ProfileComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });

  test('renders dark mode profile screen', () => {
    const ScreenWrapper = renderer.create(ProfileComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });
});

describe('Profile Screen Component with failed to fetch', () => {
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

  let mockedProps = {
    route: {
      params: {
        item: {
          id: 1
        }
      }
    }
  }

  beforeEach(() => {
    const getContactById = {};

    client.watchQuery = jest.fn(() => ({
      variables: getContactById,
      ...mockedApolloConfig,
      currentResult: jest.fn().mockImplementation(() => ({
        ...mockedApolloConfig.currentResult,
        data: apolloObjectCreator(getContactById),
      })),
    }));
  });

  ProfileComponent = (
    <ApolloProvider client={client}>
      <ProfileScreen {...mockedProps} navigation={navigation} />
    </ApolloProvider>
  );

  test('renders light mode profile screen', () => {
    const ScreenWrapper = renderer.create(ProfileComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });

  test('renders dark mode profile screen', () => {
    const ScreenWrapper = renderer.create(ProfileComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });
});

describe('Profile Screen Component with successfully fetch', () => {
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
    const getContactById = {
      firstName: 'Marfin',
      lastName: 'Fadhilah',
      age: 12,
      photo: 'example'
    };

    client.watchQuery = jest.fn(() => ({
      variables: getContactById,
      ...mockedApolloConfig,
      currentResult: jest.fn().mockImplementation(() => ({
        ...mockedApolloConfig.currentResult,
        data: apolloObjectCreator(getContactById),
      })),
    }));
  });

  let mockedProps = {
    route: {
      params: {
        item: {
          id: 1
        }
      }
    }
  }

  ProfileComponent = (
    <ApolloProvider client={client}>
      <ProfileScreen {...mockedProps} navigation={navigation} />
    </ApolloProvider>
  );

  test('renders light mode profile screen', () => {
    const ScreenWrapper = renderer.create(ProfileComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });

  test('renders dark mode profile screen', () => {
    const ScreenWrapper = renderer.create(ProfileComponent).toJSON();
    expect(ScreenWrapper).toMatchSnapshot();
  });
});
