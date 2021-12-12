import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import HeaderList from './HeaderList.component';

const mockStore = configureMockStore([thunk]);

describe('App', () => {
  it('should render header list with lighter border', () => {
    const store = mockStore({
      themeReducer: { theme: false },
    });
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <HeaderList />
        </Provider>,
      )
      .toJSON();

    const { borderColor } = wrapper.props.style[0];
    expect(borderColor).toEqual('#EEE');
  });

  it('should render header list with darker border', () => {
    const store = mockStore({
      themeReducer: { theme: true },
    });
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <HeaderList />
        </Provider>,
      )
      .toJSON();

    const { borderColor } = wrapper.props.style[0];
    expect(borderColor).toEqual('#222');
  });
});
