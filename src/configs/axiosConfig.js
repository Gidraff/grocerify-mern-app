import axios from 'axios';
// import store from '../store/store';

const url = 'http://localhost:8000';

const instance = axios.create({
	baseURL: url,
	timeout: 10000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	},

});

// instance.interceptors.request.use((config) => {
// 	config.headers['Access-Control-Allow-Origin'] = '*';
// 	return config;
// });

export default instance;
