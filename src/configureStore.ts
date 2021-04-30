import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore as _createStore, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

export const rootReducer = combineReducers({
  App: () => 'Hello world!',
});

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  let enhancer = null;
  if (process.env.NODE_ENV === 'development') {
    enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
  } else {
    enhancer = compose(applyMiddleware(sagaMiddleware));
  }

  const store = _createStore(rootReducer, enhancer);

  return store;
};

export const store = createStore();
