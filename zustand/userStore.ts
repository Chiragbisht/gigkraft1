"use client"

import { create } from "zustand"

type User = {
  name: string
  userId: string
  image: string
} | null

interface UserStore {
  user: User
  setUser: (user: User) => void
  resetUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null, // Initial state
  setUser: (user) => set({ user }), // Function to update user
  resetUser: () => set({ user: null }), // Function to reset user
}))

export type { User }
