import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAR__yp368axr1-DO2SycYrn2HbXVPjcgY';

YTSearch({key: API_KEY, term:'suftboards'}, function(data){
	console.log(data);
});


class App extends Component{
	render(){
		return(
			<div>
				<SearchBar/>
			</div>
		);
	}
}



ReactDOM.render(<App/>, document.getElementById('root'));
