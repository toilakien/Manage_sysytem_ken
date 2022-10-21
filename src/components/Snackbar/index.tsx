import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { CloseSnackbarList } from 'src/store/slice/snackbar';
import { styled } from '@mui/material';

export default function CustomizedSnackbars({
  actions,
  severity,
  content,
  color
}) {
  const handleClose = () => {
    CloseSnackbarList(false);
  };
  const AlertCus = styled(Alert)({
    backgroundColor: color,
    color: '#fff'
  });
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={actions}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <AlertCus severity={severity}>{content}</AlertCus>
      </Snackbar>
    </Stack>
  );
}
