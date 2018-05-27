import React from 'react';
import configureStore from 'redux-mock-store';

import EmptyResults from './empty-results';
import FullFilmItem from '../full-film-item/full-film-item';
import { INITIAL_STATE } from '../../constants/app-constants';

const mockStore = configureStore();
let store;

describe('<EmptyResults/>', function() {
  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
  });

  it('should render Empty Results and match snapshot', function() {
    store = mockStore({...INITIAL_STATE});
      const wrapper = shallow(<EmptyResults store={store}/>);
      expect(wrapper).toMatchSnapshot();
  });
});