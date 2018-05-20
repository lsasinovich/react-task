import React from 'react';
import configureStore from 'redux-mock-store';
import { fetch } from 'isomorphic-fetch';

import Core from './core';
import { INITIAL_STATE } from '../../constants/app-constants';

const mockStore = configureStore();
let store;

describe('<Core/>', function() {
  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
  });

  it('should render Core and match snapshot', function() {
      const wrapper = shallow(<Core store={store}/>).dive();

      expect(wrapper).toMatchSnapshot();
  });

  it('should render Core with Full Film Item', function() {
    store = mockStore({...INITIAL_STATE, fullItem: { isActive: true }});
    const wrapper = shallow(<Core store={store}/>).dive();

    expect(wrapper).toMatchSnapshot();
  });
});

