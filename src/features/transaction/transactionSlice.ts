import { create } from 'zustand';
import { transactionAPI } from '../../services/endpoints';
import { Transaction } from '../../types';

interface TransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
  fetchTransactions: () => Promise<void>;
  addTransaction: (data: Omit<Transaction, 'id'>) => Promise<void>;
  updateTransaction: (id: number, data: Partial<Transaction>) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  isLoading: false,
  error: null,
  fetchTransactions: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await transactionAPI.getTransactions();
      set({ transactions: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Failed to fetch transactions', isLoading: false });
    }
  },
  addTransaction: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await transactionAPI.createTransaction(data);
      set((state) => ({ transactions: [...state.transactions, response.data], isLoading: false }));
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Failed to add transaction', isLoading: false });
    }
  },
  updateTransaction: async (id, data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await transactionAPI.updateTransaction(id, data);
      set((state) => ({
        transactions: state.transactions.map((t) => (t.id === id ? response.data : t)),
        isLoading: false,
      }));
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Failed to update transaction', isLoading: false });
    }
  },
  deleteTransaction: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await transactionAPI.deleteTransaction(id);
      set((state) => ({
        transactions: state.transactions.filter((t) => t.id !== id),
        isLoading: false,
      }));
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Failed to delete transaction', isLoading: false });
    }
  },
}));