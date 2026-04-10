import { create } from 'zustand';
import { authAPI } from '../../services/endpoints';
import { User } from '../../types';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (data: { username: string; password: string }) => Promise<void>;
  register: (data: { username: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,
  login: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authAPI.login(data);
      const { token } = response.data;
      localStorage.setItem('token', token);
      set({ token, isLoading: false });
      // Assume user info is in token or separate call, for now set user as null or parse token
      // For simplicity, set user to some default or fetch user
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Login failed', isLoading: false });
    }
  },
  register: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authAPI.register(data);
      const { token } = response.data;
      localStorage.setItem('token', token);
      set({ token, isLoading: false });
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Registration failed', isLoading: false });
    }
  },
  logout: () => {
    authAPI.logout();
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
}));