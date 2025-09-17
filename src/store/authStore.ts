import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  
  // For demo purposes - in a real app these would connect to a backend
  adminLogin: () => void;
  userLogin: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  
  login: async (email: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    // For demo purposes, we'll accept any email/password with basic validation
    
    if (!email || !password) return false;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Demo login logic - in production this would verify credentials with backend
      if (email === 'admin@microcon.com' && password === 'admin123') {
        set({
          isAuthenticated: true,
          user: {
            id: 'admin-1',
            email: 'admin@microcon.com',
            name: 'Admin User',
            role: 'admin'
          }
        });
        return true;
      } else if (email.includes('@') && password.length >= 6) {
        set({
          isAuthenticated: true,
          user: {
            id: 'user-' + Math.floor(Math.random() * 1000),
            email,
            name: email.split('@')[0],
            role: 'user'
          }
        });
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },
  
  logout: () => {
    set({
      isAuthenticated: false,
      user: null
    });
  },
  
  // Demo functions for quick testing
  adminLogin: () => {
    set({
      isAuthenticated: true,
      user: {
        id: 'admin-1',
        email: 'admin@microcon.com',
        name: 'Admin User',
        role: 'admin'
      }
    });
  },
  
  userLogin: () => {
    set({
      isAuthenticated: true,
      user: {
        id: 'user-demo',
        email: 'user@example.com',
        name: 'Demo User',
        role: 'user'
      }
    });
  }
}));