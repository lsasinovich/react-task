import React from 'react';
import configureStore from 'redux-mock-store';
import { fetch } from 'isomorphic-fetch';

import ResultsBar from './results-bar';
import { INITIAL_STATE, ACTIONS, SORT, ITEM_COUNT_PER_PAGE } from '../../constants/app-constants';

const mockStore = configureStore();
let store = mockStore({...INITIAL_STATE,resultsCount:135, inputValue: "twilight"});

describe('<ResultsBar/>', function() {
  // it('should switch sort by clicking', () => {
  //   const wrapper = shallow(<ResultsBar store={store}/>).dive();
  //   const instance = wrapper.instance();
    
  //   jest.spyOn(instance, 'switchSort');
  //   wrapper.update();
    
  //   const buttons = wrapper.find('p');
  //   buttons.at(3).simulate('click');
  
  //   expect(instance.switchSort).toHaveBeenCalled();
  //   buttons.at(2).simulate('click');
  
  //   expect(instance.switchSort).toHaveBeenCalled();
  //  });

  it('should render ResultsBar and match snapshot', function() {
      store = mockStore(INITIAL_STATE);
      const wrapper = shallow(<ResultsBar store={store}/>).dive();
      expect(wrapper).toMatchSnapshot();
  });

  it('should render ResultsBar without results count', function() {
    delete INITIAL_STATE.resultsCount;
    store = mockStore(INITIAL_STATE);
    const wrapper = shallow(<ResultsBar store={store}/>).dive();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render ResultsBar with fullItem', function() {
    store = mockStore({...INITIAL_STATE,resultsCount:135, fullItem: {isActive: true}});
    const wrapper = shallow(<ResultsBar store={store}/>).dive();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render ResultsBar with input value', function() {
    store = mockStore({...INITIAL_STATE,resultsCount:135, fullItem: {isActive: true}, inputValue: "input"});
    const wrapper = shallow(<ResultsBar store={store}/>).dive();

    expect(wrapper).toMatchSnapshot();
  });
});