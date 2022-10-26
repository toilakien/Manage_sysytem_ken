import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import { dispatch } from 'src/store';
import {
  postDepartmentList,
  putDepartmentList
} from 'src/store/slice/department';
import { snackbarList } from 'src/store/slice/snackbar';
import { Department } from 'src/types/department';
import * as yup from 'yup';
interface Props {
  open: boolean;
  setOpen: any;
  idNeedCheckForm: any;
  setIdNeedCheckForm: any;
}
const Status: any = [
  {
    value: 'active',
    label: 'true'
  },
  {
    value: 'disable',
    label: 'false'
  }
];
const AddDepartment = ({
  open,
  setOpen,
  idNeedCheckForm,
  setIdNeedCheckForm
}: Props) => {
  const handleClose = () => {
    setOpen(false);
    formik.handleReset('');
  };
  const validationSchema = yup.object({
    // name: yup.string().trim().max(50).required('Name is required'),
    // codecription: yup.string().trim().max(255).required('codecription is required')
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      code: '',
      active: ''
    },
    validationSchema,
    onSubmit: (values: Department) => {
      if (idNeedCheckForm) {
        dispatch(putDepartmentList({ _id: idNeedCheckForm, params: values }));
      } else {
        dispatch(postDepartmentList(values));
        snackbarList({
          actions: true,
          severity: 'success',
          content: 'Add success!!!!',
          color: 'green'
        });
      }
      handleClose();
    }
  });
  return (
    <Dialog onClose={handleClose} open={open}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle
          sx={{
            textTransform: 'uppercase',
            fontWeight: 800,
            borderBottom: '1px solid #ddd'
          }}
        >
          {idNeedCheckForm ? 'Edit department' : 'Add department'}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            sx={{ width: '100%', mb: 2, mt: 2 }}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />

          <TextField
            name="code"
            label="Decription"
            variant="outlined"
            sx={{ width: '100%' }}
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.code && Boolean(formik.errors.code)}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              id="active"
              name="active"
              label="active"
              displayEmpty
              value={formik?.values?.active}
              onChange={formik.handleChange}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {Status.map((status: any, index: number) => (
                <MenuItem key={index} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="outlined">
            {idNeedCheckForm ? 'Edit ' : 'Add '}
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancer
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
export default AddDepartment;
