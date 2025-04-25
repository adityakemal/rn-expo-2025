import { create } from "zustand";
import { saveToken, getToken, deleteToken } from "@/lib/storage";

type AuthState = {
  token: string | null;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  restore: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isLoading: true,

  login: (token) => {
    saveToken(token);
    set({ token });
  },

  logout: () => {
    deleteToken();
    set({ token: null });
  },

  restore: () => {
    const token = getToken();
    set({ token, isLoading: false });
  },
}));
