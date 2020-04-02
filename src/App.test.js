import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdpapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({
	adapter: new EnzymeAdpapter()
});

test('renders without crashing', () => {
	const wrapper = shallow(<App />);
	const appCompoment = wrapper.find("[data-test='component-app']");
	expect(appCompoment.length).toBe(1);
});

test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter starts at 0', () => {});

test('click button increments counter display', () => {});
