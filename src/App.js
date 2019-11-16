import React from 'react';
import store from 'store';

import AppContainer from './containers/AppContainer';

import { LayoutProvider, StoreProvider } from '../src/contexts';
import { setAuthorizationToken } from '../src/utils/API';

function App() {
  const authToken = store.get('authenticationToken');

  if (!!authToken) {
    setAuthorizationToken(authToken);
  }

  return (
    <LayoutProvider>
      <StoreProvider>
        <AppContainer />
      </StoreProvider>
    </LayoutProvider>
  );
}

export default App;
