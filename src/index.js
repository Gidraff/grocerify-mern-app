import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import * as actions from './actions/groceryActions';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

store.dispatch(actions.fetchGroceries());
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
serviceWorker.unregister();
