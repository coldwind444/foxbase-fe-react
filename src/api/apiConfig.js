// src/api/axiosConfig.js
import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'http://localhost:8080/foxbase-be',
  headers: {
    'Content-Type': 'application/json',
  },
});

// A helper to clone axios with Bearer token
export const createApiWithToken = (token) => {
  const api = axios.create({
    baseURL: baseApi.defaults.baseURL,
    headers: {
      ...baseApi.defaults.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return api;
};

export default baseApi;
