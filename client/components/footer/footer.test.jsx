import React from 'react';
import { Footer } from './footer';

describe('<Footer/>', function() {
  it('should render Footer and match snapshot', function() {
      const wrapper = shallow(<Footer />);
      expect(wrapper).toMatchSnapshot();
  });
});