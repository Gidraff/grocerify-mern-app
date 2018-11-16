import  initialState  from '../store/initialState';
import * as actions from '../actions/types';
import _ from 'lodash';

const groceryReducer = (state = initialState.groceries, action) => {
	console.log('BF   >>>>', state);
	switch (action.type) {

	case actions.ADD_GROCERY_ITEM:
		return [...state, Object.assign({}, action.payload)];

	case actions.FETCH_GROCERY_ITEMS:
		return [...action.payload];
	case actions.UPDATE_GROCERY_ITEM:
		return console.log('LT   >>>>', state) && [
			_.unionBy([action.payload], state, 'id')
		];
	case actions.DELETE_GROCERY_ITEM:
		return [...state.filter(item => item._id !== action.payload)];
	default:
		break;
	}
	return state;
};

export default groceryReducer;
