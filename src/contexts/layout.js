import React, { useState, createContext } from 'react';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [sideBarCollapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successNotification, setSuccessNotification] = useState(false);
  const [headerComponent, setHeaderComponent] = useState(null);

  const initialState = {
    sideBarCollapsed,
    setCollapsed,
    theme,
    setTheme,
    loading,
    setLoading,
    error,
    setError,
    successNotification,
    setSuccessNotification,
    setHeaderComponent,
    headerComponent,
  };

  return (
    <LayoutContext.Provider value={initialState}>
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutContext, LayoutProvider};