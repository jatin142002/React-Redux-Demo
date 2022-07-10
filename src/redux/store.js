import {legacy_createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const store = legacy_createStore(rootReducer, applyMiddleware(logger));

export default store;