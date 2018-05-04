import React from 'react';
import { FilmItem } from './film-item';

describe('<FilmItem/>', function() {
  it('should render Film Item and match snapshot', function() {
      const wrapper = shallow(<FilmItem />);
      expect(wrapper).toMatchSnapshot();
  });
});