import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    const savedUserId = localStorage.getItem('userId');
    return savedUserId ? JSON.parse(savedUserId) : null;
  });

  useEffect(() => {
    if (userId) {
      localStorage.setItem('userId', JSON.stringify(userId));
    } else {
      localStorage.removeItem('userId');
    }
}, [userId]);


  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
