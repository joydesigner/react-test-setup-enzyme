import React, { useState } from 'react';
import './counter.styles.scss';

const Counter = ({ label }) => {
	let [ counter, setCounter ] = useState(0);
	const add = () => {
		counter++;
		setCounter(counter);
	};
	return (
		<div className="counter">
			<p className="result">{counter}</p>
			<div className="button" data-testid="button" onClick={add}>
				{label}
			</div>
		</div>
	);
};

export default Counter;
