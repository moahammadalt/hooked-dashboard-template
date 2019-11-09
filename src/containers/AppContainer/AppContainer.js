import React, { useContext, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import store from 'store';

import { LoadingContext } from '../../contexts';

import { baseRoutes } from '../../router';

import '../../assets/scss/index.scss';

function AppContainer({ history }) {
  const isAuthenticated = !!store.get('authenticationToken');

  const { loading } = useContext(LoadingContext);

  return (
    <Fragment>
      <Spin spinning={loading}>
        <Router history={history}>
          <Switch>
            {baseRoutes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
          {!isAuthenticated && <Redirect to="/login" />}
        </Router>
      </Spin>
    </Fragment>
  );
}

export default AppContainer;
