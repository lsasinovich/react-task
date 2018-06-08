import React from 'react';
import configureStore from 'redux-mock-store';

import Core from './core';
import { INITIAL_STATE } from '../../constants/app-constants';
import { NotFoundPage } from '../../components/not-found-page/not-found-page';

const mockStore = configureStore();
let store;

describe('<Core/>', () => {
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
    });

    // it('should render Core and match snapshot', function() {
    //     const location = {
    //       pathname: '/'
    //     }
    //     const wrapper = shallow(<Core store={store} location={location} />).dive();

    //     expect(wrapper).toMatchSnapshot();
    // });

    //   it('should render Core with Full Film Item', function() {
    //     const location = {
    //       pathname: '/film/123456'
    //     }
    //     store = mockStore({...INITIAL_STATE, fullItem: { isActive: true }});
    //     const wrapper = shallow(<Core store={store} location={location}/>).dive();

    //     expect(wrapper).toMatchSnapshot();
    //   });

    //   it('should render Core with search route', function() {
    //     const location = {
    //       pathname: '/search'
    //     }
    //     store = mockStore(INITIAL_STATE);
    //     const wrapper = shallow(<Core store={store} location={location}/>).dive();

    //     expect(wrapper).toMatchSnapshot();
    //   });

    it('should render Core with search route', () => {
        store = mockStore(INITIAL_STATE);
        const location = {
            pathname: '/not_found',
        };
        const wrapper = mount(<MemoryRouter initialEntries={['/not_found']}>
            <Core store={store} location={location} />
        </MemoryRouter>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<NotFoundPage />)).toEqual(true);
    });
});

