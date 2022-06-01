import create from 'zustand';
import type { IAppStore } from '../Helpers';

export const appStore = create<IAppStore>((set) => ({
  loading: false,
  alert: false,
  setAlert: (alert: boolean) => set({ alert }),
  setLoading: (loading: boolean) => set({ loading })
}));
