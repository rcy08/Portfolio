"use client";
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { decryptData, encryptData } from '../utils/utils';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');
  const validThemes = useMemo(() => ["light", "dark"], []);

  useEffect(() => {
    const encryptedValue = localStorage.getItem('theme');

    let savedTheme;
    if (!encryptedValue) {
      savedTheme = "light";
    }
    else {
      const decryptedValue = decryptData(encryptedValue);
      if (!validThemes.includes(decryptedValue?.theme)) savedTheme = "light";
      else savedTheme = decryptedValue?.theme;
    }

    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, [validThemes]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    const encryptedValue = encryptData({
      theme: newTheme
    });
    localStorage.setItem('theme', encryptedValue);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);