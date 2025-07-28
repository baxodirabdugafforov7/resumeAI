import { create } from "zustand";
import apiClient from "../services/apiClient";

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

interface AuthStore {
  user: any | null;
  loading: boolean;
  register: (data: RegisterData) => Promise<void>;
  // You can also add login, logout etc. here
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: false,

  register: async (data) => {
    try {
      set({ loading: true });
      const response = await apiClient.post("/auth/register", data);
      set({ user: response.data.user }); // or just response.data if that's what you return
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
