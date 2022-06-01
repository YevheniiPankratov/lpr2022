import React from 'react';
import { userStore } from '../../Stores/UserStore';

export const UserPage: React.FC = () => {
  const [user] = userStore((state) => [state.user]);
  const { email, firstName, lastName } = user;
  return (
    <div>
      <h1>User Info:</h1>
      <h2>
        First Name:
        {firstName}
      </h2>
      <h2>
        Last Name:
        {lastName}
      </h2>
      <h2>
        Email:
        {email}
      </h2>
    </div>
  );
};
