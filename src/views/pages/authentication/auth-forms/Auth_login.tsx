import {
    Box,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    Typography
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useAuth from 'src/hooks/useAuth';
import { snackbarList } from 'src/store/slice/snackbar';
import { Link } from 'react-router-dom';
const Auth_login = () => {
    const { login } = useAuth();

    //validate form
    const validationSchema = yup.object({
        // email: yup.string().email().required(" Invalid email !"),
        password: yup.string()
    });

    //formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember_me: true
        },
        validationSchema,
        onSubmit: (values) => {
            try {
                if (values) {
                    login(values.email, values.password, values.remember_me);
                } else {
                }
            } catch (error) {
                console.log(error);
            }
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                />
                <Typography sx={{ color: 'red', ml: 1 }}>
                    {formik.errors.email}
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                />
                <Typography sx={{ color: 'red', ml: 1 }}>
                    {formik.errors.password}
                </Typography>
                <Grid xs sx={{ ml: 0.5 }}>
                    <Link to="#">Quên mật khẩu?</Link>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Đăng nhập
                </Button>
            </Grid>
            <Grid container justifyContent={"center"}>
                Chưa có tài khoản?&nbsp;<Link style={{ textDecoration: "none" }} to="/register">{"  Đăng kí"}</Link>
            </Grid>
        </form>
    );
};
export default Auth_login;
