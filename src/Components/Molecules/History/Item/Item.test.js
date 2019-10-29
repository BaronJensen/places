import React from 'react';
import { shallow } from 'enzyme';
import {PlacesContext} from 'Components/Providers/Places';
import Item from './';

describe('Render items ', () => {
  test('it should mock the context', () => {

    const contextValues = { 
    	removePlace:()=>{},
		selectPlace:()=>{} };
    jest.spyOn(PlacesContext, 'usePlacesContext').mockImplementation(() => contextValues);

  
  });


  const wrapper = shallow(<Item />);


});


describe('Remove element', () => {



  test('it should delete elements', () => {

    const contextValues = { 
    	removePlace:()=>{},
		selectPlace:()=>{} };
    jest.spyOn(PlacesContext, 'usePlacesContext').mockImplementation(() => contextValues);


  const wrapper = shallow(<Item />);

    expect(wrapper.find("button"));
      
  
  });
});