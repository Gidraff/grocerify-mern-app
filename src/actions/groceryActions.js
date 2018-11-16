import axios from 'axios';
import * as actions from './types';
// import instance from '../config/axiosConfig';

const HOST = 'localhost';
const PORT = 8000;
const BASE_URL = `http://${HOST}:${PORT}`;


export const loadGroceryItemsSuccess = (groceryItems) => ({
	type: actions.FETCH_GROCERY_ITEMS,
	payload: groceryItems
});

export function addGroceryItem(groceryData) {
	return (dispatch) => {
		axios.post(`${BASE_URL}/groceries`, groceryData)
			.then(newItem => {
				dispatch({
					type: actions.ADD_GROCERY_ITEM,
					payload: newItem.data
				});
			}).catch(err => {
				console.log(err);
			});
	};
}

export function buyOrUnBuy(id, updateItem) {
	return (dispatch) => {
		axios.put(`${BASE_URL}/groceries/${id}`, updateItem).
			then(res => {
				dispatch({
					type: actions.UPDATE_GROCERY_ITEM,
					payload: {
						id: id,
						data: updateItem
					}
				});
			}).catch(err => {
				console.log('errr', err);
			});
	};
}

export function deleteItem(id){
	return (dispatch) => {
		axios.delete(`${BASE_URL}/groceries/${id}`)
			.then(res => dispatch({
				type: actions.DELETE_GROCERY_ITEM,
				payload: id
			})
			).catch(err => {
				console.log('vhbdjbcdj', err);
			});
	};
}


export function fetchGroceries() {
	return (dispatch) => {
		axios.get(`${BASE_URL}/groceries`)
			.then(res => {
				dispatch(loadGroceryItemsSuccess([...res.data]));
			}).catch(err => {
				console.log(err);
			});
	};
}
