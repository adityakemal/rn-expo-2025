// hooks/useLogin.js
import { useMutation } from "@tanstack/react-query";

import { useAuthStore } from "@/stores/auth";
import { Alert } from "react-native";
import { fetchPost } from "@/lib/axios";

// Custom hook untuk login
export const usePostLogin = () => {
  const { login } = useAuthStore(); // Gunakan Zustand untuk menyimpan token

  return useMutation({
    mutationFn: (body: any) => fetchPost("/employee/sign-in", body),
    onSuccess: (data) => {
      // Setelah login berhasil, simpan token di Zustand
      login(data?.result?.token);
      console.log("Login berhasil", data);
    },
    onError: (error: any) => {
      // Tangani error, misalnya tampilkan alert
      console.error("Login gagal:", error?.response?.data?.message);
      Alert.alert(
        "Sign in failed!", // Judul alert
        error?.response?.data?.message || "Terjadi kesalahan, coba lagi.", // Pesan error, default jika tidak ada pesan dari API
        [
          {
            text: "OK", // Tombol OK
            onPress: () => console.log("User dismissed the alert"),
          },
        ]
      );
    },
  });
};
