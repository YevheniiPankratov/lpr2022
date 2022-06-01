import React from 'react';
import { Link } from 'react-router-dom';
import RoutesList from '../../Layout/RoutesList';

export const HomePage: React.FC = () => {
  return <Link to={RoutesList.UserAccount}>Go to UserPage</Link>;
};
