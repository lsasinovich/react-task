import React from 'react';
import configureStore from 'redux-mock-store';
import FilmItem from './film-item';

import { INITIAL_STATE } from '../../constants/app-constants';

const mockStore = configureStore();
const store = mockStore(INITIAL_STATE);

const testData = {
    id: 123456,
    title: 'Title',
    posterUrl: 'PosterUrl',
    genres: ['Genre'],
    year: 1900,
};

describe('<FilmItem/>', () => {
    let props;

    beforeEach(() => {
        props = {
            ...testData,
            match: {
                params: {
                    id: 123456,
                },
            },
        };
    });

    it('should render Film Item and match snapshot', () => {
        const wrapper = shallow(<FilmItem props={props} store={store} />).dive();
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Film Item without poster url and match snapshot', () => {
        delete props.posterUrl;
        const wrapper = shallow(<FilmItem props={props} store={store} />).dive();
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
