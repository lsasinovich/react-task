import React from 'react';
import configureStore from 'redux-mock-store';

import Header from './header';
import { INITIAL_STATE } from '../../constants/app-constants';

const mockStore = configureStore();
let store;

describe('<Header/>', () => {
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
    });

    it('should render Header and match snapshot', () => {
        const wrapper = shallow(<Header store={store} />).dive();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render Header with Full Film Item', () => {
        store = mockStore({ ...INITIAL_STATE, fullItem: { isActive: true } });
        const wrapper = shallow(<Header store={store} />).dive();

        expect(wrapper).toMatchSnapshot();
    });
});

describe('Click events must work as well', () => {
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
    });

    it('Genre button', () => {
        const wrapper = shallow(<Header store={store} />).dive();
        wrapper.update();
        const buttons = wrapper.find('button');

        buttons.at(0).simulate('click');
        expect(store.getActions()).toEqual([{ type: 'SWITCH_SEARCH', search: 'genres' }]);
    });

    it('Title Button', () => {
        const wrapper = shallow(<Header store={store} />).dive();
        wrapper.update();
        const buttons = wrapper.find('button');

        buttons.at(1).simulate('click');
        expect(store.getActions()).toEqual([{ type: 'SWITCH_SEARCH', search: 'title' }]);
    });

    // it('Search Button', () => {
    //     const getMovie = jest.fn((() => {
    //         console.log('hello');
    //     }));
    //     const wrapper = shallow(<Header store={store}/>).dive();
    //     console.log(wrapper.instance().props.store.getActions());
    //     const buttons = wrapper.find('button');

    //     buttons.at(2).simulate('click');
    //     expect(getMovie).toHaveBeenCalled();
    // });

    it('should reset input value', () => {
        store = mockStore({ ...INITIAL_STATE, inputValue: 'transformers' });
        const wrapper = shallow(<Header store={store} />).dive();
        wrapper.update();
        const images = wrapper.find('img');

        images.at(0).simulate('click');
        expect(store.getActions()).toEqual([{ type: 'RESET_INPUT_VALUE' }]);
    });

    // it('should update input change', () => {
    //     const wrapper = shallow(<Header store={store}/>).dive();
    //     const instance = wrapper.instance();
    //     jest.spyOn(instance, 'updateInputValue');
    //     jest.spyOn(instance, 'getMovie');
    //     wrapper.update();

    //     const inputs = wrapper.find('input');
    //     inputs.at(0).simulate('change', {target: {value: 'matched'} });
    //     expect(instance.updateInputValue).toHaveBeenCalled();

    //     inputs.at(0).simulate('keyPress', {keyCode: 13});

    //     expect(store.getActions()[0]).toEqual({ type: 'UPDATE_INPUT_VALUE', value: 'matched' });
    // });
});
