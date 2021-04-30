import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore as _createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './Infra/rootReducer';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  let enhancer = null;
  if (process.env.NODE_ENV === 'development') {
    enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, logger, routerMiddleware(history)));
  } else {
    enhancer = compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)));
  }

  const store = _createStore(rootReducer(history), enhancer);

  return store;
};

export const store = createStore();
