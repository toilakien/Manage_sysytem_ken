import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useFormik } from "formik";
import { dispatch, useSelector } from "src/store";
import { postDepartmentList } from "src/store/slice/department";
import * as yup from 'yup';
interface Props {
    props: boolean,
    close: any
}
const AddDepartment = (props: Props) => {
    const handleClose = () => {
        props.close(false);
        formik.handleReset('');
    }
    const validationSchema = yup.object({
        // name: yup.string().trim().max(50).required('Name is required'),
        // description: yup.string().trim().max(255).required('Description is required')
    })
    const formik = useFormik({
        initialValues: {
            name: '',
            code: '',
        },
        validationSchema,
        onSubmit:  values => {             
            dispatch(postDepartmentList(values));
            handleClose();
        }
    });
    return (
        <Dialog onClose={handleClose} open={props.props}>
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle sx={{ textTransform: "uppercase", fontWeight: 800 }} >Add department</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        sx={{ width: "100%", mb: 2, mt: 2 }}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                    />

                    <TextField
                        name="code"
                        label="Decription"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        value={formik.values.code}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.code && Boolean(formik.errors.code)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button type="submit" variant="outlined" >Add</Button> 
                    <Button variant="outlined" onClick={handleClose}>Cancer</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
export default AddDepartment;