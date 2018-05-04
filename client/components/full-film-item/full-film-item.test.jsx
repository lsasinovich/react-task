import React from 'react';
import { FullFilmItem } from './full-film-item';

describe('<FullFilmItem/>', function() {
  it('should render FullFilmItem and match snapshot', function() {
      const wrapper = shallow(<FullFilmItem />);
      expect(wrapper).toMatchSnapshot();
  });
});