import React from 'react';
import { Core } from './core';

describe('<Core/>', function() {
  it('should render Core and match snapshot', function() {
      const wrapper = shallow(<Core />);

      expect(wrapper).toMatchSnapshot();
  });

  it('should render Core with Full Film Item', function() {
    const wrapper = shallow(<Core />);
    wrapper.setState({fullItem: true});

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().fullItem).toEqual(true);
  });
});

