import React from 'react';
import configureStore from 'redux-mock-store';

import { INITIAL_STATE } from '../../constants/app-constants';

const mockStore = configureStore();
let store;

describe('<FullFilmItem/>', () => {
    beforeEach(() => {
        store = mockStore({
            fullItem: {
                filmData: {
                    poster_path: 'Poster Path',
                    title: 'Title',
                    vote_average: 4.7,
                    release_date: '2018-12-01',
                    runtime: 124,
                    overview: 'Overview',
                },
            },
        });
    });

    // it('should render FullFilmItem and match snapshot', function() {

    // const wrapper = shallow(<FullFilmItem store={store} match={match} fullLoad={fullLoad}/>).dive();
    //     expect(wrapper).toMatchSnapshot();
    // });

    // it('should render FullFilmItem and match snapshot without vote average', function() {
    //   delete store.vote_average;
    //   const wrapper = shallow(<FullFilmItem store={store} match={match} fullLoad={fullLoad}/>).dive();
    //   expect(wrapper).toMatchSnapshot();
    // });

    // it('should render FullFilmItem and match snapshot without runtime', function() {
    //   delete store.runtime;
    //   const wrapper = shallow(<FullFilmItem store={store} match={match} fullLoad={fullLoad}/>).dive();
    //   expect(wrapper).toMatchSnapshot();
    // });

    it('should return to main page by clicking on Return Butoon', () => {
        store = mockStore({ ...INITIAL_STATE, fullItem: { isActive: true } });
        const wrapper = shallow(<Header store={store} />).dive();
        const buttons = wrapper.find('button');
        buttons.at(0).simulate('click');
        expect(store.getActions()).toEqual([{ type: 'RETURN_TO_MAIN_PAGE' }]);
    });
});
