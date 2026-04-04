import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_USER, MOCK_TRANSACTIONS, USER_ROLES } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    const savedRole = localStorage.getItem('finance_dashboard_role');
    return savedRole || USER_ROLES.ADMIN;
  });
  
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('finance_dashboard_transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : MOCK_TRANSACTIONS;
  });

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('finance_dashboard_dark_mode');
    return savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('finance_dashboard_role', role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem('finance_dashboard_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('finance_dashboard_dark_mode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('finance_dashboard_user');
    return savedUser ? JSON.parse(savedUser) : MOCK_USER;
  });

  useEffect(() => {
    localStorage.setItem('finance_dashboard_user', JSON.stringify(user));
  }, [user]);

  const toggleRole = () => {
    setRole(prev => prev === USER_ROLES.ADMIN ? USER_ROLES.VIEWER : USER_ROLES.ADMIN);
  };

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const updateTransaction = (updatedTx) => {
    setTransactions(transactions.map(t => t.id === updatedTx.id ? updatedTx : t));
  };

  const value = {
    role,
    setRole,
    toggleRole,
    transactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
    darkMode,
    setDarkMode,
    USER_ROLES,
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
