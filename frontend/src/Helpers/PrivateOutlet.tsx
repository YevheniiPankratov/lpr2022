import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userStore } from '../Stores/UserStore';
import RoutesList from '../Layout/RoutesList';

export const PrivateOutlet = () => {
  const [isAuth] = userStore((state) => [state.isAuth]);
  return isAuth ? <Outlet /> : <Navigate to={RoutesList.Home} />;
};
