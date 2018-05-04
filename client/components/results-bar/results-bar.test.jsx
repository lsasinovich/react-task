import React from 'react';
import { ResultsBar } from './results-bar';

describe('<ResultsBar/>', function() {
  it('should render ResultsBar and match snapshot', function() {
      const wrapper = shallow(<ResultsBar />);

      expect(wrapper).toMatchSnapshot();
  });

  it('should render ResultsBar with props', function() {
    const wrapper = shallow(<ResultsBar count={135}/>);

    expect(wrapper.contains(<p className="results-count">135 movies found</p>)).toEqual(true);
    expect(wrapper.state().rating).toEqual("active");
  });
});