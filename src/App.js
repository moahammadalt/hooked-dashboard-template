import React from 'react';

import { LayoutProvider, LoadingProvider } from '../src/contexts';
import AppContainer from './containers/AppContainer';

function App() {
  return (
    <LoadingProvider>
      <LayoutProvider>
        <AppContainer />
      </LayoutProvider>
    </LoadingProvider>
  );
}

export default App;
