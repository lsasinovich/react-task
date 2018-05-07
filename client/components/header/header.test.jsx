import React from 'react';
import { Header } from './header';
import { FullFilmItem } from '../full-film-item/full-film-item';

describe('<Header/>', function() {
  it('should render Header and match snapshot', function() {
      const wrapper = shallow(<Header fullItem={false}/>);

      expect(wrapper).toMatchSnapshot();
  });

  it('should render Header with Full Film Item', function() {
    const wrapper = shallow(<Header fullItem={true}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().fullItem).toEqual(true);
    expect(wrapper.contains(<FullFilmItem />)).toEqual(true);
  });
});

describe('Click events must work as well', function() {  
    it('Genre button', () => {
        const wrapper = mount(<Header />);
        const instance = wrapper.instance();
        
        jest.spyOn(instance, 'genreHendler');
        wrapper.update();
        const buttons = wrapper.find('button');

        buttons.at(0).simulate('click');
      
        expect(instance.genreHendler).toHaveBeenCalled();
    });

    it('Title Button', () => {
        const wrapper = mount(<Header />);
        const instance = wrapper.instance();
        
        jest.spyOn(instance, 'titleHendler');
        wrapper.update();
        const buttons = wrapper.find('button');

        buttons.at(1).simulate('click');
      
        expect(instance.titleHendler).toHaveBeenCalled();
    });

    it('Search Button', () => {
        const wrapper = mount(<Header />);
        const instance = wrapper.instance();
        
        jest.spyOn(instance, 'searchHendler');
        wrapper.update();
        const buttons = wrapper.find('button');

        buttons.at(2).simulate('click');
      
        expect(instance.searchHendler).toHaveBeenCalled();
    });

    it('should return to main page by clicking on Return Butoon', () => {
        const wrapper = mount(<Header fullItem={true}/>);
        const instance = wrapper.instance();
        
        jest.spyOn(instance, 'returnToMainPage');
        wrapper.update();
        const buttons = wrapper.find('button');

        buttons.at(0).simulate('click');
      
        expect(instance.returnToMainPage).toHaveBeenCalled();
    });

    
    it('should reset input value', () => {
        const spy = jest.spyOn(Header.prototype, "resetInputValue");

        const wrapper = shallow(<Header />);
        const inputs = wrapper.find('input');
        inputs.at(0).simulate('click');
        
        expect(spy).toBeCalled();
        expect(wrapper.state().inputValue).toEqual("");
    });

    it('should update input change', () => {
        const spy = jest.spyOn(Header.prototype, "updateInputValue");

        const wrapper = shallow(<Header />);
        const inputs = wrapper.find('input');
        inputs.at(0).simulate('change', {target: {value: 'matched'} });

        expect(spy).toBeCalled();
        expect(wrapper.state().inputValue).toEqual("matched");
    });
  });
