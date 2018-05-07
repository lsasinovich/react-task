import React from 'react';
import { ResultsBodyErrorBoundary } from './results-body-error-boundary';

describe('<ResultsBodyErrorBoundary/>', function() {
  it('should render ResultsBodyErrorBoundary and match snapshot', function() {
      const wrapper = shallow(<ResultsBodyErrorBoundary children={<div>Hello</div>} />);

      expect(wrapper).toMatchSnapshot();
  });

  it('should render ResultsBodyErrorBoundary with Full Film Item', function() {
    const wrapper = shallow(<ResultsBodyErrorBoundary children={<div>Hello</div>}/>);
    wrapper.setState({hasError: true});

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().hasError).toEqual(true);
  });
});
