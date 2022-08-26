import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { CloseSnackbarList } from 'src/store/slice/snackbar';
import { dispatch } from 'src/store';

export default function CustomizedSnackbars({ actions, severity,content }) {

  const handleClose = () => {
    dispatch(CloseSnackbarList(false));
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={actions} autoHideDuration={1000} onClose={handleClose}>
        <Alert severity={severity}>
        {content}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
