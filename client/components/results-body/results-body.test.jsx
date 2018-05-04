import React from 'react';
import { ResultsBody } from './results-body';
import { EmptyResults } from '../empty-results/empty-results';

const resultAssets = [
    { title: 'Asset 1' },
    { title: 'Asset 2' },
    { title: 'Asset 3' },
    { title: 'Asset 4' },
    { title: 'Asset 5' },
    { title: 'Asset 6' },
    { title: 'Asset 7' },
    { title: 'Asset 8' },
    { title: 'Asset 9' },
];

describe('<ResultsBody/>', function() {
  it('should render ResultsBody and match snapshot', function() {
      const wrapper = shallow(<ResultsBody assets={resultAssets}/>);

      expect(wrapper).toMatchSnapshot();
  });

  it('should render ResultsBody and match snapshot', function() {
    const wrapper = shallow(<ResultsBody assets={[]}/>);

    expect(wrapper.contains(<EmptyResults/>)).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});