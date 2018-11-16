import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';
import * as actions from './actions/groceryActions';
import GroceryPage from './components/grocery/GroceryPage';
import ManageGroceryPage from './components/grocery/ManageGroceryPage';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

store.dispatch(actions.fetchGroceries());
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route path="/" component={App} />
				<Route path="/add" component={GroceryPage} />
				<Route path="/groceries" component={ManageGroceryPage} />
			</div>
		</Router>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
