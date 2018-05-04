import React from 'react';
import { EmptyResults } from './empty-results';

describe('<EmptyResults/>', function() {
  it('should render Empty Results and match snapshot', function() {
      const wrapper = shallow(<EmptyResults />);
      expect(wrapper).toMatchSnapshot();
  });
});