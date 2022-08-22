import { Avatar, Box, Button, Container, Grid, styled, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
const AccountSetting = () => {
  const [img, setImg] = useState('');
  const AcountSettingWrapper = styled(Box)({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around'
  });
  const BoxCus = styled(Box)({
    border: '2px solid #ddd',
    height: '500px',
    position: 'relative',
    backgroundColor: '#bbdefb'
  });
  const AvataTitle = styled(Typography)({
    fontSize: '224rem',
    fontFamily: 'cursive',
    cursor: 'pointer'
  });
  const ListItem = styled(Grid)({
    border: '1px solid #fff',
    borderRadius: '5px',
    position: 'relative',
    left: '10%',
    top: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 10px',
    width: '80%',
    '&:hover': {
      backgroundColor: '#e1f5fe',
      opacity: 0.9
    }
  });
  const TaskList = styled(Grid)({
    display:"flex",
    justifyContent:"space-around",
    borderBottom:"1px solid #fff",
    padding:"15px",
   
  });
  const handleChange = () => {};
  return (
    <Container fixed sx={{maxHeight:"100%"}}>
      <PageTitleWrapper>
        <Typography sx={{textAlign:"center"}} variant="h2">Personal Profile</Typography>
      </PageTitleWrapper>
      <AcountSettingWrapper>
        <BoxCus width={'30%'}>
          <Box
            sx={{
              width: '80%',
              display: 'flex',
              position: 'relative',
              left: '40px',
              top: '30px',
              height: '70px',
              borderBottom: '3px solid #fff'
            }}
          >
            <Avatar
              sx={{ width: 56, height: 56, mr: 5 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjMTliI4r2bnBlfkbRP0KXZQWOhmW76m2CQ&usqp=CAU"
            />
            <AvataTitle>Mentor</AvataTitle>
          </Box>
          <Box>
            <ListItem>
              <PersonIcon />
              ADMIN
              <Typography>User</Typography>
            </ListItem>
            <br />
            <ListItem>
              <PersonIcon />
              ADMIN
              <Typography>User</Typography>
            </ListItem>
            <br />
            <ListItem>
              <PersonIcon />
              ADMIN
              <Typography>User</Typography>
            </ListItem>
          </Box>

          <Button sx={{ ml: 9, mt: 10 }} variant="contained" component="label">
            Upload
            <input
              onChange={handleChange}
              name="avata"
              hidden
              accept="image/*"
              multiple
              type="file"
            />
          </Button>
        </BoxCus>
        <BoxCus width={'60%'}>
          <Grid>
            <Typography variant="h2"  sx={{textAlign:"center",p:3,borderBottom:"2px solid #fff"}}>Personal Details</Typography>
          </Grid>
          <Grid>
            <TaskList>
                <Typography sx={{fontSize:"1.2rem"}} variant='subtitle1'>Full name</Typography>
                <Typography sx={{fontSize:"1.2rem"}} variant='body1'>Admin</Typography>
            </TaskList> 
            <TaskList>
                <Typography sx={{fontSize:"1.2rem"}} variant='subtitle1'>Phone Number</Typography>
                <Typography sx={{fontSize:"1.2rem"}} variant='body1'>0922222222</Typography>
            </TaskList> 
            <TaskList>
                <Typography sx={{fontSize:"1.2rem"}} variant='subtitle1'>Date Of Birth</Typography>
                <Typography sx={{fontSize:"1.2rem"}} variant='body1'>16/6/2022</Typography>
            </TaskList> 
            <TaskList>
                <Typography sx={{fontSize:"1.2rem"}} variant='subtitle1'>Gender</Typography>
                <Typography sx={{fontSize:"1.2rem"}} variant='body1'>	Male</Typography>
            </TaskList> 
            <TaskList>
                <Typography sx={{fontSize:"1.2rem"}} variant='subtitle1'>Position</Typography>
                <Typography sx={{fontSize:"1.2rem"}} variant='body1'>	Administrator</Typography>
            </TaskList> 
          </Grid>
        </BoxCus>
      </AcountSettingWrapper>
    </Container>
  );
};

export default AccountSetting;
