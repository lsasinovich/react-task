import React from 'react';
import { FullFilmItem } from './full-film-item';

const testData = {
  title: "Title",
  posterUrl: "PosterUrl",
  genres: "Genre",
  additional: "Additional",
  year: 1900,
  rating: 4.6,
  duratin: 123,
  description: "Description"
}

describe('<FullFilmItem/>', function() {
  it('should render FullFilmItem and match snapshot', function() {
      const wrapper = shallow(<FullFilmItem />);
      expect(wrapper).toMatchSnapshot();
  });

  it('should render FullFilmItem and match snapshot', function() {
    const wrapper = shallow(<FullFilmItem props={testData}/>);
    expect(wrapper).toMatchSnapshot();
  });
});