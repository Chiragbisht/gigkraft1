import { create } from 'zustand';

interface NameState {
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  resetNames: () => void;
}

export const useNameStore = create<NameState>((set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  resetNames: () => set({ firstName: '', lastName: '' })
}));
