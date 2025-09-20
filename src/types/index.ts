export interface User {
  id: number;
  name: string;
  email: string;
  themePreference: 'LIGHT' | 'DARK' | 'SYSTEM';
  biometricEnabled: boolean;
  notificationSettings: {
    budget_alerts: boolean;
    bill_reminders: boolean;
    transaction_confirmations: boolean;
  };
  createdAt: string;
}

export interface Wallet {
  id: number;
  name: string;
  initialBalance: number;
  currentBalance: number;
  userId: number;
}

export interface Category {
  id: number;
  name: string;
  type: 'INCOME' | 'EXPENSE';
  monthlyBudget?: number;
  parentCategoryId?: number;
  userId: number;
}

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
  walletId: number;
  categoryId: number;
  transferToWalletId?: number;
  userId: number;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface ApiError {
  message: string;
  statusCode: number;
}
