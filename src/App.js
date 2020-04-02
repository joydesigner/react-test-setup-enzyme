import React from 'react';
import Counter from './components/counter/counter';

import './App.css';

function App() {
	return (
		<div className="App" data-test="component-app">
			<header className="App-header">
				<Counter label="Increment counter" />
			</header>
		</div>
	);
}

export default App;
