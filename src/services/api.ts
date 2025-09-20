import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthResponse, User, Wallet } from '../types';

const API_BASE_URL = 'http://localhost:3000'; // Alterar para IP do servidor em produção

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Interceptor para adicionar token de autenticação
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para tratar erros de autenticação
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('access_token');
      await AsyncStorage.removeItem('user');
      // Aqui você pode redirecionar para a tela de login
    }
    return Promise.reject(error);
  }
);

export const authService = {
  async register(name: string, email: string, password: string): Promise<AuthResponse> {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  async getProfile(): Promise<{ user: User }> {
    const response = await api.get('/auth/me');
    return response.data;
  },

  async saveToken(token: string): Promise<void> {
    await AsyncStorage.setItem('access_token', token);
  },

  async saveUser(user: User): Promise<void> {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  },

  async getStoredUser(): Promise<User | null> {
    const userStr = await AsyncStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  async getStoredToken(): Promise<string | null> {
    return await AsyncStorage.getItem('access_token');
  },

  async logout(): Promise<void> {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('user');
  },
};

export const walletService = {
  async getWallets(): Promise<Wallet[]> {
    const response = await api.get('/wallets');
    return response.data;
  },

  async createWallet(name: string, initialBalance: number): Promise<Wallet> {
    const response = await api.post('/wallets', { name, initialBalance });
    return response.data;
  },

  async getWalletsSummary(): Promise<{
    totalBalance: number;
    walletsCount: number;
    wallets: Array<{ id: number; name: string; currentBalance: number }>;
  }> {
    const response = await api.get('/wallets/summary');
    return response.data;
  },

  async updateWallet(id: number, data: { name?: string; currentBalance?: number }): Promise<Wallet> {
    const response = await api.patch(`/wallets/${id}`, data);
    return response.data;
  },

  async deleteWallet(id: number): Promise<void> {
    await api.delete(`/wallets/${id}`);
  },
};

export default api;
