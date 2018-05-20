import React from 'react';
import configureStore from 'redux-mock-store';
import { fetch } from 'isomorphic-fetch';
import FilmItem from './film-item';

import { INITIAL_STATE } from '../../constants/app-constants';
import { fullFilmLoad } from '../../action-creators';

const mockStore = configureStore();
let store = mockStore(INITIAL_STATE);

const testData = {
  id: 123456,
  title: "Title",
  posterUrl: "PosterUrl",
  genres: ["Genre"],
  year: 1900
};

describe('<FilmItem/>', function() {
  let props;

  beforeEach(() => {
      props = { 
        ...testData 
      };
  });

  it('should render Film Item and match snapshot', function() {
      const wrapper = shallow(<FilmItem props={props} store={store}/>).dive();
      expect(wrapper).toMatchSnapshot();
  });

  it('should render Film Item without poster url and match snapshot', function() {
    delete props.posterUrl;
    const wrapper = shallow(<FilmItem props={props} store={store}/>).dive();
    expect(wrapper).toMatchSnapshot();
});

  // it('should load FullFilmItem byOnClick event', function() {
  //   const wrapper = shallow(<FilmItem props={testData} store={store}/>).dive();
  //   const instance = wrapper.instance();
  //   fullFilmLoad = jest.fn();

  //   wrapper.update();
  //   const buttons = wrapper.find('p');
  //   buttons.at(0).simulate('click');

  //   expect(fullFilmLoad).toHaveBeenCalled();
  // });
});