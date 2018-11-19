import { combineReducers } from 'redux';
import groceries from './groceryReducer';

console.log('jbjcdncdcd==?', groceries);
const rootReducer = combineReducers({
	groceries: groceries
});

export default rootReducer;
