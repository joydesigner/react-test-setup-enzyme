import React from 'react';

import ReactDom from 'react-dom';
import Counter from '../counter';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDom.render(<Counter />, div);
});

test('renders button correctly', () => {});
