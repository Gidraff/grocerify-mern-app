import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GroceryPage from './components/grocery/GroceryPage';

export default (
	<Router>
		<div>
			<Route path="/" component={App} />
			<Route path="/add" component={GroceryPage} />
		</div>
	</Router>
);
