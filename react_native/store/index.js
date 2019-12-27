import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducer';

const makeStore =  createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunkMiddleware, promiseMiddleware())),
);

export default makeStore;