import React, { useState, createContext } from 'react';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [sideBarCollapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');

  const initialState = {
    sideBarCollapsed: [sideBarCollapsed, setCollapsed],
    theme: [theme, setTheme],
  };

  return (
    <LayoutContext.Provider value={initialState}>
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutContext, LayoutProvider};