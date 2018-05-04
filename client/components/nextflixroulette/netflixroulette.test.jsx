import React from 'react';
import { Nextflixroulette } from './nextflixroulette';

describe('<Nextflixroulette/>', function() {
  it('should render Nextflixroulette and match snapshot', function() {
      const wrapper = shallow(<Nextflixroulette />);
      expect(wrapper).toMatchSnapshot();
  });
});