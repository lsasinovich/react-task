import React from 'react';
import { Home } from './home.jsx';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter componrnt', () => {
    it('starts with', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper).toMatchSnapshot();
    });
});