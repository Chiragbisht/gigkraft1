import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NameState {
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  resetNames: () => void;
}

export const useNameStore = create<NameState>((set) => ({
  firstName: "",
  lastName: "",
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  resetNames: () => set({ firstName: "", lastName: "" }),
}));



interface AuthStore {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => {
        // console.log("Storing token in Zustand:", token);
        set({ token });
      },
      clearToken: () => set({ token: null }), // Function to remove token
    }),
    {
      name: "auth-storage", // Key name in localStorage
    }
  )
);

