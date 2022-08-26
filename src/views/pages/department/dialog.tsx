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
import { snackbarList } from 'src/store/slice/snackbar';

const AlertDialog = ({ open, id, setOpen }: any) => {
  
  const handleDedete = (id) => {
    dispatch(deleteDepartmentList(id));
    getListDepart();
    setOpen(false);
    snackbarList({actions:true,severity:"success",content:"Delete success!",color:"green"})
   
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
      </Dialog>
    </div>
  );
};
export default AlertDialog;
