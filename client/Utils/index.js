
import {applyMiddleware, createStore } from 'redux';
import rootReducer from './../src/store/reducer';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};