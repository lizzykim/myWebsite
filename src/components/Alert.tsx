import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Dispatch, SetStateAction } from 'react';

type AlertsProps = {
  status: any;
  openSnackbar: boolean;
  setopenSnackbar: Dispatch<SetStateAction<boolean>>;
};

const Alert = ({ status, openSnackbar, setopenSnackbar }: AlertsProps) => {
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
