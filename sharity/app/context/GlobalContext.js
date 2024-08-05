"use client"
import React, { createContext, useState, useEffect } from 'react';



export const GlobalProvider = ({ children }) => {
  const [isCharityProfileVisible, setIsCharityProfileVisible] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('isCharityProfileVisible');
    if (storedValue) {
      setIsCharityProfileVisible(JSON.parse(storedValue));
    }
  }, []);

  const updateVisibility = (value) => {
    setIsCharityProfileVisible(value);
    localStorage.setItem('isCharityProfileVisible', JSON.stringify(value));
  };

  return (
      {children}
  
  );
};
