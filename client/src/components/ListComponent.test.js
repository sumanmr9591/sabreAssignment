import React from 'react';
import { shallow } from 'enzyme';
import ListComponent from './ListComponent';
import { findByTestAtrr, testStore } from './../../Utils';

const setUp = (initialState={})=>{
   const store = testStore(initialState);
   const wrapper = shallow(<ListComponent store={store}/>);
   return wrapper;
}

describe('List Component',()=>{
    let wrapper;
    beforeEach(()=>{
    	const initialState = {
    		data: [{
			        "phone": "9989789871", 
			        "name": "Suman M R", 
			        "email": "suman@email.com",
			        "poster":"1.jpg",
			        "id":1
    		      },{
			        "phone": "99855489871", 
			        "name": "Ajay M R", 
			        "email": "ajay@email.com",
			        "poster":"2.jpg",
			        "id":1
    		      },{
			        "phone": "9923789871", 
			        "name": "Manoj M R", 
			        "email": "manoj@email.com",
			        "poster":"3.jpg",
			        "id":1
    		      }]
    	}
     wrapper = setUp(initialState);
    });

    it('Should render without error', ()=>{
      const component = findByTestAtrr(wrapper, 'listComponent');
      expect(component.length).toBe(1);
    });
});