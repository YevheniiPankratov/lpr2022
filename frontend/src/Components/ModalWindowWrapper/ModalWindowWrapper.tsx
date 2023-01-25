import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import { IChangeInfoModal } from '../../Helpers';

export const ModalWindowWrapper = ({
  isOpenModal,
  handleCloseModal,
  children
}: IChangeInfoModal) => {
  return (
    <Dialog open={isOpenModal} onClose={handleCloseModal}>
      <DialogTitle sx={{ m: 2, p: 2 }}>
        <IconButton
          aria-label="Close"
          onClick={handleCloseModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey'
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
