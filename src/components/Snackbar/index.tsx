import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars({ actions, severity }) {
  const [open, setOpen] = React.useState(false);
  console.log(actions);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={actions} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity}>
          This is an error alert — check it out!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
