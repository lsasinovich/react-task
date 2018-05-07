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

// describe('Click events must work as well', function() {  
//     it('Genre button', () => {
//       const spy = jest.spyOn(Header.prototype, "genreHendler");
  
//       const wrapper = shallow(<Header />);
//       const buttons = wrapper.find('button');
//       buttons.at(0).simulate('click');
      
//       expect(spy).toBeCalled();
//     });

//     it('Title Button', () => {
//         const spy = jest.spyOn(Header.prototype, "titleHendler");
    
//         const wrapper = shallow(<Header />);
//         const buttons = wrapper.find('button');
//         buttons.at(1).simulate('click');
        
//         expect(spy).toBeCalled();
//     });

//     it('Search Button', () => {
//         const spy = jest.spyOn(Header.prototype, "searchHendler");

//         const wrapper = shallow(<Header />);
//         const buttons = wrapper.find('button');
//         buttons.at(2).simulate('click');
        
//         expect(spy).toBeCalled();
//     });

//     it('should return to main page by clicking on Return Butoon', () => {
//         const spy = jest.spyOn(Header.prototype, "returnToMainPage");

//         const wrapper = shallow(<Header fullItem={true}/>);
//         const buttons = wrapper.find('button');
//         buttons.at(0).simulate('click');

//         expect(spy).toBeCalled();
//         expect(wrapper.state().fullItem).toEqual(false);
//     });

    
//     it('should reset input value', () => {
//         const spy = jest.spyOn(Header.prototype, "resetInputValue");

//         const wrapper = shallow(<Header />);
//         const inputs = wrapper.find('input');
//         inputs.at(0).simulate('click');
        
//         expect(spy).toBeCalled();
//         expect(wrapper.state().inputValue).toEqual("");
//     });

//     it('should update input change', () => {
//         const spy = jest.spyOn(Header.prototype, "updateInputValue");

//         const wrapper = shallow(<Header />);
//         const inputs = wrapper.find('input');
//         inputs.at(0).simulate('change', {target: {value: 'matched'} });

//         expect(spy).toBeCalled();
//         expect(wrapper.state().inputValue).toEqual("matched");
//     });
//   });
