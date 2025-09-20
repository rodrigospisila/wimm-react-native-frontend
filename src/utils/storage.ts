import { Platform } from 'react-native';

// Polyfill para AsyncStorage na web
const webStorage = {
  async getItem(key: string): Promise<string | null> {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  },

  async setItem(key: string, value: string): Promise<void> {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  },

  async removeItem(key: string): Promise<void> {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  },
};

// Usar localStorage na web e AsyncStorage no mobile
export const storage = Platform.OS === 'web' ? webStorage : require('@react-native-async-storage/async-storage').default;
