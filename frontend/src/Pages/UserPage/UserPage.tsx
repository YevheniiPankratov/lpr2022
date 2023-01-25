import React, { useState } from 'react';
import Button from '@mui/material/Button';

import { userStore } from '../../Stores/UserStore';
import {
  ModalWindowWrapper,
  UserPageDiv,
  ModalUpdateUserProfile,
  ProfileAvatar
} from '../../Components';

export const UserPage: React.FC = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [FieldToChange, setFieldToChange] = useState('');
  const [user] = userStore((state) => [state.user]);
  const { email, firstName, lastName } = user;

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const changeFieldHandler = (filedName: string) => {
    setFieldToChange(filedName);
    handleClickOpenModal();
  };

  return (
    <UserPageDiv>
      <h1 className="user-info-header">User Info:</h1>
      <div className="user-block">
        {' '}
        <div className="user-block-info">
          <div className="first-name-block mb-15">
            <h2>First Name</h2>
            <h3>{firstName}</h3>
            <Button
              variant="outlined"
              onClick={() => changeFieldHandler('First Name')}
            >
              Change First Name
            </Button>
          </div>
          <div className="first-name-block mb-15">
            <h2>Last Name</h2>
            <h3>{lastName}</h3>
            <Button
              variant="outlined"
              onClick={() => changeFieldHandler('Last Name')}
            >
              Change Last Name
            </Button>
          </div>
          <div className="last-name-block mb-15">
            <h2>Email</h2>
            <h3>{email}</h3>
          </div>
          <div className="password-block">
            <h2>Password</h2>
            <Button
              variant="outlined"
              onClick={() => changeFieldHandler('Password')}
            >
              Change password
            </Button>
          </div>
        </div>
        <ProfileAvatar />
      </div>

      {isOpenModal && (
        <ModalWindowWrapper
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
        >
          <ModalUpdateUserProfile
            handleCloseModal={handleCloseModal}
            FieldToChange={FieldToChange}
          />
        </ModalWindowWrapper>
      )}
    </UserPageDiv>
  );
};
