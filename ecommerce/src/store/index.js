import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/root.reducer';

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development' ? compose(
    console.tron.createEnhancer(), applyMiddleware(sagaMiddleware)) : null;

const store = createStore(rootReducer, enhancer);

export default store;
