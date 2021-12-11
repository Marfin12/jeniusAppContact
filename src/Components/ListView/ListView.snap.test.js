import React from 'react';
import renderer from 'react-test-renderer';

import ListView from './ListView.component';
import config from './ListView.config';

describe('List View Component with default props', () => {
  const ComponentWrapper = renderer
    .create(<ListView {...config.defaultProps} />)
    .toJSON();

  test('renders list view component', () => {
    expect(ComponentWrapper).toMatchSnapshot();
  });
});
