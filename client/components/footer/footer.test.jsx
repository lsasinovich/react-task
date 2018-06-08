import React from 'react';
import { Footer } from './footer';

describe('<Footer/>', () => {
    it('should render Footer and match snapshot', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});
