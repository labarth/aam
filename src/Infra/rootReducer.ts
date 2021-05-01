import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// eslint-disable-next-line
const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
  });

export default rootReducer;
