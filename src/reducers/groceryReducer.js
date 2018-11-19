import  {initialState}  from '../store/initialState';
import * as actions from '../actions/types';

const groceryReducer = (state = initialState.groceries, action) => {
	switch (action.type) {

	case actions.ADD_GROCERY_ITEM:
		return [
			...state, Object.assign({}, action.payload)
		];

	case actions.FETCH_GROCERY_ITEMS:
		return [...action.payload];

	case actions.UPDATE_GROCERY_ITEM:
		return [
			Object.assign({}, action.payload),
			...state.filter(
				item => item._id !== action.payload._id
			)
		];
	case actions.DELETE_GROCERY_ITEM:
		return state.filter(
			item => item._id !== action.payload
		);

	case actions.RECIEVE_ERROR:
		return action.payload;
	default:
		break;
	}
	return state;
};

export default groceryReducer;
