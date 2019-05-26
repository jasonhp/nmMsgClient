// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import message from './message';

const rootReducer = combineReducers({
  message,
  router
});

export default rootReducer;
