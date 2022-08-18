//import MUI
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NordicWalkingIcon from '@mui/icons-material/NordicWalking';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//
import Auth_login from '../auth-forms/Auth_login';


export default function Login() {

    return (
        <Grid sx={{
            width: '100%',
            height: '100vh',
            bgcolor: "#8FC2C2"

        }}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    borderRadius: "10px",
                    bgcolor: "#fff",
                    border: "1px solid #ddd",
                    position: "relative",
                    top: 100,
                    pb: 5
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <NordicWalkingIcon />
                    </Avatar>
                    <Typography component="h1" variant="h3">
                        Sign in
                    </Typography>
                    {/* Auth login import  */}
                    <Auth_login />
                </Box>
            </Container>
        </Grid>
    );
}