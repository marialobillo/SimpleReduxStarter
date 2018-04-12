import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDF9zOIKzOW6sHeSx7FvIK0nMWg7ZFB0OI';


// Create a new component
const App = () => {
	return (
		<div>
				<SearchBar/>
		</div>
	);
}


ReactDOM.render(<App/>, document.getElementById('root'));
