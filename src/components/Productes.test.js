import React from 'react';
import Product from './Productes';
import Enzyme from 'enzyme';
import adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new adapter() });
it('should rende a list  of producte as an unordered list', () => {
	const mochupProductes = [
       {id:1 , name: "mohamed 1", brand: 'mockebrand a'},
      {id:2 , name: "mohamed 2", brand: 'mockebrand b'},
      {id:3 , name: "mohamed 3", brand: 'mockebrand c'},
     
	];
	const wrapper = Enzyme.shallow(<Product products={mochupProductes} />)
	expect(wrapper.find('li').length).toEqual(mochupProductes.length);
});
	it('should display the brand name in each `<li>` list', () => {
	const mochProductes = [
      {id:1 , name: "mohamed 1", brand: 'mockebrand a'},
      {id:2 , name: "mohamed 2", brand: 'mockebrand b'},
      {id:3 , name: "mohamed 3", brand: 'mockebrand c'},
	];
	const wrapper = Enzyme.shallow(<Product products={mochProductes} />);
	const firstElament = wrapper.find('li').first();
	expect(firstElament.contains(mochProductes[0].brand)).toEqual(true)
});
