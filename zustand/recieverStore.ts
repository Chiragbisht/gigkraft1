import { create } from "zustand";
import type { User } from "@/lib/types";

interface ReceiverState {
  receiver: User | null;
  setReceiver: (user: User) => void;
  clearReceiver: () => void;
}

export const useReceiverStore = create<ReceiverState>((set) => ({
  receiver: null,

  setReceiver: (user) => set({ receiver: user }),

  clearReceiver: () => set({ receiver: null }),
}));
