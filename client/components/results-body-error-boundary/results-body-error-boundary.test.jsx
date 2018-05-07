import React from 'react';
import { ResultsBodyErrorBoundary } from './results-body-error-boundary';


describe('<ResultsBodyErrorBoundary/>', function() {
  it('should render ResultsBodyErrorBoundary and match snapshot', function() {
      const wrapper = shallow(<ResultsBodyErrorBoundary children={<div>Hello</div>} />);

      expect(wrapper).toMatchSnapshot();
  });

  it('should render ResultsBodyErrorBoundary with Errors', function() {
    const wrapper = shallow(<ResultsBodyErrorBoundary children={<div>Hello</div>} />);
    const instance = wrapper.instance();
    instance.componentDidCatch();
      
    expect(wrapper.state().hasError).toEqual(true);
  });

  it('should render ResultsBodyErrorBoundary with Errors', function() {
    const wrapper = shallow(<ResultsBodyErrorBoundary children={<div>Hello</div>}/>);
    wrapper.setState({hasError: true});

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().hasError).toEqual(true);
  });
});
