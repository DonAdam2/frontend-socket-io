import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//root reducer
import rootReducer from './rootReducer';
//middle wares
import thunkMiddleware from 'redux-thunk';
import socketMiddleware from './middleWares/SocketMiddleWare';

const middlewares = [];

// log redux data in development mode only
if (process.env.NODE_ENV !== 'production') {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

const configureStore = (socketClient) => {
	const store = createStore(
		rootReducer,
		/* preloadedState, */
		composeWithDevTools(
			applyMiddleware(thunkMiddleware, socketMiddleware(socketClient), ...middlewares)
		)
	);

	// enable hot loading in development mode only
	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
	}

	return store;
};
export default configureStore;
