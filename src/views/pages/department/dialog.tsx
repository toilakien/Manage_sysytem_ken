import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {
  deleteDepartmentList,
  getDepartmentList
} from 'src/store/slice/department';
import { dispatch } from 'src/store';
import CustomizedSnackbars from 'src/components/Snackbar';

const AlertDialog = ({ open, id, setOpen }: any) => {
  const [actions, setActions] = React.useState(false);
  const [severity, setSeverity] = React.useState('success');
  const handleDedete = (id) => {
    dispatch(deleteDepartmentList(id));
    getListDepart();
    setOpen(false);
    setActions(true);
    setSeverity('error')
  };
  const getListDepart = async () => {
    await dispatch(getDepartmentList());
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button onClick={() => handleDedete(id)} autoFocus>
            Agree
          </Button>
        </DialogActions>
        <CustomizedSnackbars actions={actions} severity={severity} />
      </Dialog>
    </div>
  );
};
export default AlertDialog;
