import React, { useState, createContext } from 'react';

const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const initialState = { loading, setLoading};

  return (
    <LoadingContext.Provider value={initialState}>
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext, LoadingProvider};