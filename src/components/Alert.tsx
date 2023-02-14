import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { AlertState } from './Sections/Contact/contact';
import { useState } from 'react';

type AlertsProps = {
  status: AlertState | undefined;
};

const Alert = ({ status, openSnackbar, setopenSnackbar }: any) => {
  const handleClose = () => {
    setopenSnackbar(false);
  };
  const StatusAlert = () => {
    switch (status) {
      case 'error':
        return (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={openSnackbar}
            onClose={handleClose}
            autoHideDuration={2000}
          >
            <MuiAlert
              severity="error"
              onClose={handleClose}
              style={{ width: '300px' }}
            >
              Failed to submit your message! Please retry!
            </MuiAlert>
          </Snackbar>
        );

      case 'success':
        return (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={openSnackbar}
            onClose={handleClose}
            autoHideDuration={2000}
          >
            <MuiAlert
              severity="success"
              onClose={handleClose}
              style={{ width: '300px' }}
            >
              Successfully submitted!
            </MuiAlert>
          </Snackbar>
        );
      default:
        return <span></span>;
    }
  };

  return <StatusAlert />;
};

export default Alert;
