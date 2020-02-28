import { combineReducers } from 'redux';
import { userReducer } from './reduces/UserReducer';

const reducers = combineReducers({
	userReducer,
	// add reducers here
});

export default reducers;
