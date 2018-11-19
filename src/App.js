import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import GroceryPage from './components/grocery/GroceryPage';
import ManageGroceryPage from './components/grocery/ManageGroceryPage';
import NavBar from './components/grocery/Navigation';
import NotFound from './components/grocery/NotFound';
import Home from './components/grocery/Home';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App container-fluid">
					<NavBar />
					<Switch>
						<Route exact path="/Home" component={Home} />
						<Route exact path="/">
							<Redirect to="/Home" />
						</Route>
						<Route exact path="/Add" component={GroceryPage} />
						<Route exact path="/Groceries" component={ManageGroceryPage} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
