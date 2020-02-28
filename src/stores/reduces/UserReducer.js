import * as actionTypes from '../actions/actionTypes';

const initialState = {
	token: null,
	userId: null,
	error: null,
	loading: null,
	authRedirectPath: '/',
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_USER: return initialState;
		default: return state;
	}
};

export { userReducer, initialState };
