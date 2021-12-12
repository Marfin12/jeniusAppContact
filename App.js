import * as React from 'react';
import { ApolloProvider } from 'react-apollo';

import ApolloClient from 'apollo-boost';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Main, reducers } from './src';

const client = new ApolloClient({
  uri: 'http://YOUR_URL/graphql', // read setup instruction to get ip from ifconfig
});

/* eslint-disable no-console */
console.warn = () => {}; // for development purpose

console.disableYellowBox = true

const App = () => {
  const middlewares = applyMiddleware(thunk);
  const store = createStore(reducers, middlewares);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Main isDarkMode />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
