import React from 'react';
import Avatar from '@mui/material/Avatar';

import { userStore } from '../../Stores/UserStore';
import { localStorageGetItem } from '../../Helpers';

export const MiniAvatar: React.FC = () => {
  const imageUrl = localStorageGetItem('userAvatar');
  if (!imageUrl) {
    const [user] = userStore((state) => [state.user]);

    const { firstName, lastName } = user;
    const firstWordOfFirstName = firstName[0];
    const firstWordOfLastName = lastName[0];

    return (
      <Avatar sx={{ bgcolor: '#111' }}>
        {firstWordOfFirstName}&#32;{firstWordOfLastName}
      </Avatar>
    );
  }

  return <Avatar alt="user mini avatar" src={imageUrl} />;
};
