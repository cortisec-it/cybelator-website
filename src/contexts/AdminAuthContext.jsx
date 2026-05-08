import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '@/lib/customSupabaseClient';

const AdminAuthContext = createContext({});

export const AdminAuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin]   = useState(false);
  const [loading, setLoading]   = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('cybelator_admin_token');
    const email = localStorage.getItem('cybelator_admin_email');
    if (token && email) {
      setIsAdmin(true);
      setCurrentUser({ email });
    }
    setLoading(false);
  }, []);

  const loginAdmin = async (email, password) => {
    setLoading(true);
    const { data, error } = await apiFetch('/api/auth/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (error) {
      setLoading(false);
      return { error: { message: error.error || 'Invalid credentials.' } };
    }

    localStorage.setItem('cybelator_admin_token', data.token);
    localStorage.setItem('cybelator_admin_email', data.email);
    setIsAdmin(true);
    setCurrentUser({ email: data.email });
    setLoading(false);
    return { data };
  };

  const logoutAdmin = async () => {
    localStorage.removeItem('cybelator_admin_token');
    localStorage.removeItem('cybelator_admin_email');
    setIsAdmin(false);
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <AdminAuthContext.Provider value={{ isAdmin, loading, loginAdmin, logoutAdmin, currentUser }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
