import apiClient from './apiClient';
import { AuthResponse, Transaction, MonthlyReport } from '../types';

export const authAPI = {
  register: (data: { username: string; email: string; password: string }) =>
    apiClient.post<AuthResponse>('/api/v1/auth/register', data),
  login: (data: { username: string; password: string }) =>
    apiClient.post<AuthResponse>('/api/v1/auth/login', data),
  logout: () => apiClient.post('/api/v1/auth/logout'),
};

export const transactionAPI = {
  getTransactions: () => apiClient.get<Transaction[]>('/api/v1/transactions'),
  createTransaction: (data: Omit<Transaction, 'id'>) =>
    apiClient.post<Transaction>('/api/v1/transactions', data),
  updateTransaction: (id: number, data: Partial<Transaction>) =>
    apiClient.put<Transaction>(`/api/v1/transactions/${id}`, data),
  deleteTransaction: (id: number) =>
    apiClient.delete(`/api/v1/transactions/${id}`),
};

export const reportAPI = {
  getMonthlyReport: (month: number, year: number) =>
    apiClient.get<MonthlyReport>(`/api/v1/transactions/reports/monthly?month=${month}&year=${year}`),
};