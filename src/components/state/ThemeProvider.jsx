import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('white');

  const handleTheme = ({ target }) => {
    setTheme(target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useSetTheme = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return { theme, handleTheme };
};
