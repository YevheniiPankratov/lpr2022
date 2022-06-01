import React, { useEffect } from 'react';
import Layout from './Layout/Layout';
import { userStore, appStore } from './Stores';
import { CircularIndeterminate } from './Components';
import { userFromLS, tokenFromLS } from './Helpers';

export const App: React.FC = () => {
  const [setIsAuth, setUser] = userStore((state) => [
    state.setIsAuth,
    state.setUser
  ]);
  const [loading, setLoading] = appStore((state) => [
    state.loading,
    state.setLoading
  ]);

  useEffect(() => {
    setLoading(true);
    if (!!userFromLS && !!tokenFromLS) {
      setUser(JSON.parse(userFromLS));
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <CircularIndeterminate />;
  }

  return <Layout />;
};

export default App;
