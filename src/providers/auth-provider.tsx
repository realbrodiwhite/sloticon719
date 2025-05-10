
"use client";

import type { User } from '@/lib/types';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Mock user data
const MOCK_ADMIN_USER: User = {
  id: 'admin-user',
  name: 'Admin User',
  email: 'admin@example.com',
  role: 'admin',
  status: 'active',
  lastLogin: new Date(),
  createdAt: new Date(),
  avatarUrl: 'https://picsum.photos/seed/admin/100/100',
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email?: string, password?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const checkAuthStatus = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate checking auth status (e.g., from localStorage or a cookie)
      const storedUser = localStorage.getItem('sloticon-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Failed to check auth status:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  useEffect(() => {
    if (!isLoading && !user && pathname !== '/login') {
      router.push('/login');
    } else if (!isLoading && user && pathname === '/login') {
      router.push('/dashboard');
    }
  }, [user, isLoading, router, pathname]);


  const login = async (email?: string, password?: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real app, you'd validate credentials here
    if (email === 'admin@example.com' && password === 'password') {
      setUser(MOCK_ADMIN_USER);
      localStorage.setItem('sloticon-user', JSON.stringify(MOCK_ADMIN_USER));
      router.push('/dashboard');
    } else {
      // Handle login failure (e.g., show a toast message)
      console.error('Login failed: Invalid credentials');
      alert('Login failed: Invalid credentials. Use admin@example.com and password.');
      setUser(null); // Ensure user is null on failure
    }
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser(null);
    localStorage.removeItem('sloticon-user');
    router.push('/login');
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
