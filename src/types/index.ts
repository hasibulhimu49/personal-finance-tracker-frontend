export interface Transaction {
  id: number;
  amount: number;
  category: string;
  type: 'INCOME' | 'EXPENSE';
  localDate: string;
  description?: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

export interface AuthResponse {
  message: string;
  token: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface MonthlyReport {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  transactions: Transaction[];
}

export interface CategoryData {
  category: string;
  amount: number;
}