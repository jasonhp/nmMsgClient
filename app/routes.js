/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import MsgPage from './containers/MsgPage';
import WebLoginPage from './containers/WebLoginPage';

export default () => (
  <App>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={MsgPage} />
      <Route path="/snsLogin/:plat(wx|wb|qq)" component={WebLoginPage} />
    </Switch>
  </App>
);
