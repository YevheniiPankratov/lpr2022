import create from 'zustand';
import type { IUserStore, IUser } from '../Helpers';
import { tokenFromLS } from '../Helpers';

export const userStore = create<IUserStore>((set) => ({
  isAuth: !!tokenFromLS || false,
  user: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: ''
  },
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
  setUser: (user: IUser) => set({ user })
}));
