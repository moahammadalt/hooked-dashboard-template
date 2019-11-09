import React from 'react';
import store from 'store';

import AppContainer from './containers/AppContainer';

import { LayoutProvider } from '../src/contexts';
import { setAuthorizationToken } from '../src/utils/API';

function App() {
  const authToken = store.get('authenticationToken');

  if(!!authToken) {
    setAuthorizationToken(authToken);
  }
  
  return (
    <LayoutProvider>
      <AppContainer />
    </LayoutProvider>
  );
}

export default App;
