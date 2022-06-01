export const localStorageSetItem = (attr: string, item: string) =>
  localStorage.setItem(attr, item);

export const localStorageGetItem = (attr: string) => localStorage.getItem(attr);

export const userFromLS = localStorageGetItem('user');
export const tokenFromLS = localStorageGetItem('token');
