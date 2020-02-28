import createSagaMiddleware from 'redux-saga';

const SagaMgr = (() => {
	const sagaMiddleware = createSagaMiddleware();

	// sagaMiddleware.run(watcher_name);

	return {
		sagaMiddleware,
	};
})();

export default SagaMgr;
