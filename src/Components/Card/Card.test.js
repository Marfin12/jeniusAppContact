import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Card from './Card.component';

const mockStore = configureMockStore([thunk]);

describe('Card', () => {
  it('should render card component with white background color', () => {
    const store = mockStore({
      themeReducer: { theme: false },
    });
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <Card />
        </Provider>,
      )
      .toJSON();

    const borderColor = wrapper.props.style.backgroundColor;
    expect(borderColor).toEqual('#FFF');
  });

  it('should render card component with black background color', () => {
    const store = mockStore({
      themeReducer: { theme: true },
    });
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <Card />
        </Provider>,
      )
      .toJSON();

    const borderColor = wrapper.props.style.backgroundColor;
    expect(borderColor).toEqual('#222');
  });

  it('should call onpress props when card is clicked', () => {
    const store = mockStore({
      themeReducer: { theme: true },
    });
    const onPress = jest.fn();
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <Card onPress={onPress} />
        </Provider>,
      )
      .toJSON();

    wrapper.props.onClick();
    expect(onPress).toHaveBeenCalled();
  });
});
