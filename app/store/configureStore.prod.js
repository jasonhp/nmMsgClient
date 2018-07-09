// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import type { messageStateType } from '../reducers/message';

const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: messageStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
