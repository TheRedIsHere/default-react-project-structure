import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './ReducerMgr';
import SagaMgr from './SagaMgr';

const composeEnhancers = process.env.NODE_ENV === 'development'
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: compose || null;

const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, SagaMgr.sagaMiddleware)));

export default store;
