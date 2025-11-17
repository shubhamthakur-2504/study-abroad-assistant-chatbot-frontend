import axiosInstance from './axios';

export const authApi = {
  signup: (username, email, password) =>
    axiosInstance.post('/api/auth/signup', { username, email, password }),
  login: (email, password) =>
    axiosInstance.post('/api/auth/token', { email, password }),
  getMe: () => axiosInstance.get('/api/auth/me'),
  refresh: () => axiosInstance.post('/api/auth/refresh'),
};

export const documentsApi = {
  getAdminDocuments: () => axiosInstance.get('/api/documents/admin'),
  getUserDocuments: () => axiosInstance.get('/api/documents/'),
  upload: (formData) =>
    axiosInstance.post('/api/documents/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export const chatApi = {
  getHistory: () => axiosInstance.get('/api/chat/history'),
  startChat: (question, docId) =>
    axiosInstance.post('/api/chat/query', { question, docId }),
  continueChat: (chatId, question, docId) =>
    axiosInstance.post(`/api/chat/query/${chatId}`, { question, docId }),
};

export const healthApi = {
  check: () => axiosInstance.get('/health'),
};