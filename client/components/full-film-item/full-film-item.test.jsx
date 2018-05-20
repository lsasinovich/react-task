import React from 'react';
import configureStore from 'redux-mock-store';
import { fetch } from 'isomorphic-fetch';

import FullFilmItem from './full-film-item';
import { INITIAL_STATE } from '../../constants/app-constants';

const mockStore = configureStore();
let store;

describe('<FullFilmItem/>', function() {
  beforeEach(() => {
    store = mockStore({
      fullItem: {
        filmData: {
          poster_path: "Poster Path",
          title: 'Title',
          vote_average: 4.7,
          release_date: '2018-12-01',
          runtime: 124,
          overview: "Overview"
        }
      }
    });
  });

  it('should render FullFilmItem and match snapshot', function() {
      const wrapper = shallow(<FullFilmItem store={store}/>).dive();
      expect(wrapper).toMatchSnapshot();
  });

  it('should render FullFilmItem and match snapshot without vote average', function() {
    delete store.vote_average;
    const wrapper = shallow(<FullFilmItem store={store}/>).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render FullFilmItem and match snapshot without runtime', function() {
    delete store.runtime;
    const wrapper = shallow(<FullFilmItem store={store}/>).dive();
    expect(wrapper).toMatchSnapshot();
  });
});