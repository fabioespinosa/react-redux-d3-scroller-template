import { combineReducers } from 'redux';
import home from './home';
import data from './data';

const rootReducer = combineReducers({
	home,
	data
});

export default rootReducer;
