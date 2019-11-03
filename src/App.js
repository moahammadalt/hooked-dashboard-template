import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import { baseRoutes } from '../src/router';
import { LayoutProvider } from '../src/contexts';

import './assets/scss/index.scss';

function App({ history }) {
  return (
    <LayoutProvider>
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
      </Router>
    </LayoutProvider>
  );
}

export default App;
