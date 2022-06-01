import React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import { appStore } from '../../Stores';

type Severity = 'error' | 'success' | 'info' | 'warning' | undefined;

export const CustomAlert = (props: { severity: Severity; msg: string }) => {
  const { severity, msg } = props;

  const [alert, setAlert] = appStore((state) => [state.alert, state.setAlert]);

  return (
    <Collapse in={alert}>
      <Alert
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlert(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {msg}
      </Alert>
    </Collapse>
  );
};
