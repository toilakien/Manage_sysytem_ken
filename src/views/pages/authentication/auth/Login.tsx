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
import bgrImage from 'src/imageLayout.jpg';
import logo from 'src/logo.png';
export default function Login() {
  return (
    <Grid
      sx={{
        width: '100%',
        height: '100vh',
        bgcolor: '#ccc',
        backgroundImage: `url(${bgrImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"

      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          borderRadius: '10px',
          bgcolor: '#f5f5f5',
          opacity: "0.8",
          border: '1px solid #ddd',
          position: 'relative',
          top: 130,
          pb: 5
        }}
      >
        <CssBaseline />

        <Grid sx={{ mt:2 }}>
          <Grid container justifyContent={"center"}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} src={logo} />
          </Grid>
          <Grid container justifyContent={"center"}>
            <Typography component="h1" variant="h3">
              Đăng nhập
            </Typography>
          </Grid>
        </Grid>
        {/* Auth login import  */}
        <Auth_login />

      </Container>
    </Grid>
  );
}
