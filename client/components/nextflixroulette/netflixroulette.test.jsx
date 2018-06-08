import React from 'react';
import { Nextflixroulette } from './nextflixroulette';

describe('<Nextflixroulette/>', () => {
    it('should render Nextflixroulette and match snapshot', () => {
        const wrapper = shallow(<Nextflixroulette />);
        expect(wrapper).toMatchSnapshot();
    });
});
