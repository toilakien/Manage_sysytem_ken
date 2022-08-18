import { Box, TextField, FormControlLabel, Checkbox, Button, Grid, Typography } from "@mui/material"
import Link from '@mui/material/Link';
import { useFormik } from "formik";
import * as yup from 'yup';
import useAuth from "src/hooks/useAuth";
const Auth_login = () => {
    const {login}=useAuth();

    
    //validate form
    const validationSchema = yup.object({
        email: yup.string().email().required(" Invalid email !"),
        password: yup.string()
            
    })
 
    //formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember_me: true
        },
        validationSchema,
        onSubmit: ( values )=> {
           try {
                if(values){
                    login(values.email,values.password,values.remember_me);
                }
           } catch (error) {
                console.log(error);
                
           }
           
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box   sx={{ mt: 1 }}>
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
                <Typography sx={{color:"red",ml:1}}>{formik.errors.email}</Typography>
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
                <Typography sx={{color:"red",ml:1}}>{formik.errors.password}</Typography>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </form>

    )
}
export default Auth_login;