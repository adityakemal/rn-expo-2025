// lib/axios.js

import { useAuthStore } from "@/stores/auth";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Tambahkan interceptor untuk setiap request
axiosInstance.interceptors.request.use(
  async (config) => {
    // Ambil token dari AsyncStorage
    // Jika token ada, masukkan ke header Authorization
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Tambahkan interceptor untuk menangani response (jika dibutuhkan)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token kadaluarsa atau tidak valid, bisa melakukan logout atau refresh token
      console.error("Unauthorized, please login again.");
    }
    return Promise.reject(error);
  }
);

//fetchers

export const fetchGet = async (url: string, params?: any) => {
  const res = await axiosInstance.get(url);
  return res.data;
};

export const fetchPost = async (url: string, body?: any) => {
  const res = await axiosInstance.post(url, body);
  return res.data;
};
