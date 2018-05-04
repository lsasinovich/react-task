import React from 'react';
import { SearchContainer } from './search-container';
import { ResultsBar } from '../results-bar/results-bar';
import { ResultsBody } from '../results-body/results-body';
import { Header } from '../header/header';

describe('<SearchContainer/>', function() {
  it('should render SearchContainer and match snapshot', function() {
      const wrapper = shallow(<SearchContainer />);

      expect(wrapper).toMatchSnapshot();
  });

  it('should contain ResultsBar', function() {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper.contains(<ResultsBar />)).toEqual(true);
  });

  it('should contain', function() {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper.contains(<ResultsBody assets={[]} />)).toEqual(true);
  });

  it('should contain', function() {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper.contains(<Header />)).toEqual(true);
  });

});