import React from 'react';
import configureStore from 'redux-mock-store';
import { fetch } from 'isomorphic-fetch';

import ResultsBody from './results-body';
import EmptyResults from '../empty-results/empty-results';

import { INITIAL_STATE} from '../../constants/app-constants';

const mockStore = configureStore();

describe('<ResultsBody/>', function() {
  it('should render ResultsBody and match snapshot', function() {
      const store = mockStore({...INITIAL_STATE, results: {
        data: [{
          key: 123,
          id: 123,
          title: 'title',
          posterUrl: 'url',
          release_date: '2018-12-01',
          genres: ['genre']
        }]
      }});
      const wrapper = shallow(<ResultsBody store={store}/>).dive();

      expect(wrapper).toMatchSnapshot();
  });

  it('should render ResultsBody and match snapshot', function() {
    const store = mockStore({...INITIAL_STATE, results: {data: []}});
    const wrapper = shallow(<ResultsBody store={store}/>).dive();

    expect(wrapper.contains(<EmptyResults/>)).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});