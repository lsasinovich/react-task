import React from 'react';
import { FilmItem } from './film-item';

const testData = {
  title: "Title",
  posterUrl: "PosterUrl",
  genre: "Genre",
  year: 1900
}

describe('<FilmItem/>', function() {
  it('should render Film Item and match snapshot', function() {
      const wrapper = shallow(<FilmItem />);
      expect(wrapper).toMatchSnapshot();
  });

  it('should render Film Item and match snapshot with props', function() {
    const wrapper = shallow(<FilmItem props={testData}/>);
    expect(wrapper).toMatchSnapshot();
});
});