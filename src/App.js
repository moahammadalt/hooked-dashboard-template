import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import 'antd/dist/antd.css';
import store from 'store';

import { baseRoutes } from '../src/router';

import './assets/scss/index.scss';

function App({ history }) {
  const [isAuthenticated, setUserAuth] = useState(!!store.get('authenticationToken'));
  console.log('token', isAuthenticated);

  const PrivateRoute = props =>
    isAuthenticated || props.noAuth ? (
      <Route {...props} />
    ) : (
      <Redirect to="login" />
    );

  return (
    <Router history={history}>
      <Switch>
        {baseRoutes.map(route => (
          <PrivateRoute
            noAuth={route.noAuth}
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
