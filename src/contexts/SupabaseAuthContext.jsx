import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

// Stub auth context — authentication is now handled entirely by AdminAuthContext via JWT.
// This file is kept to avoid breaking any existing imports.

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  // No session tracking needed; admin JWT is stored in localStorage by AdminAuthContext
  const value = useMemo(() => ({
    user: null,
    session: null,
    loading: false,
  }), []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
