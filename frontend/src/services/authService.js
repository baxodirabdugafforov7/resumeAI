// src/services/authService.ts

import apiClient from './apiClient';
import { LoginCredentials, RegisterCredentials } from '../types/auth';

export const login = async (credentials: LoginCredentials) => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials) => {
  const response = await apiClient.post('/auth/register', credentials);
  return response.data;
};

export const fetchHelloMessage = async () => {
  const response = await apiClient.get('/auth/hello');
  return response.data;
};
