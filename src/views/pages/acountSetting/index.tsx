import { Box, Container, Grid, styled, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
const AccountSetting = () => {
  const [selectedImage, setSelectedImage] = useState<any>(
    'https://i.stack.imgur.com/ILTQq.png'
  );

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
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: '1px solid #fff',
    padding: '15px'
  });
  const handleUpload = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Container fixed sx={{ maxHeight: '100%' }}>
      <PageTitleWrapper>
        <Typography sx={{ textAlign: 'center' }} variant="h2">
          Personal Profile
        </Typography>
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
            <img
              style={{
                borderRadius: '100%'
              }}
              alt="not fount"
              width={'250px'}
              src={selectedImage}
            />
            {/* <UploadAndDisplayImage selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> */}
            <AvataTitle>Mentor</AvataTitle>
          </Box>
          <br />
          <br />
          <br />
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
          <input
            style={{ position: 'relative', top: '80px', left: '30px' }}
            type={'file'}
            onChange={handleUpload}
          />
        </BoxCus>
        <BoxCus width={'60%'}>
          <Grid>
            <Typography
              variant="h2"
              sx={{ textAlign: 'center', p: 3, borderBottom: '2px solid #fff' }}
            >
              Personal Details
            </Typography>
          </Grid>
          <Grid>
            <TaskList>
              <Typography sx={{ fontSize: '1.2rem' }} variant="subtitle1">
                Full name
              </Typography>
              <Typography sx={{ fontSize: '1.2rem' }} variant="body1">
                Admin
              </Typography>
            </TaskList>
            <TaskList>
              <Typography sx={{ fontSize: '1.2rem' }} variant="subtitle1">
                Phone Number
              </Typography>
              <Typography sx={{ fontSize: '1.2rem' }} variant="body1">
                0922222222
              </Typography>
            </TaskList>
            <TaskList>
              <Typography sx={{ fontSize: '1.2rem' }} variant="subtitle1">
                Date Of Birth
              </Typography>
              <Typography sx={{ fontSize: '1.2rem' }} variant="body1">
                16/6/2022
              </Typography>
            </TaskList>
            <TaskList>
              <Typography sx={{ fontSize: '1.2rem' }} variant="subtitle1">
                Gender
              </Typography>
              <Typography sx={{ fontSize: '1.2rem' }} variant="body1">
                Male
              </Typography>
            </TaskList>
            <TaskList>
              <Typography sx={{ fontSize: '1.2rem' }} variant="subtitle1">
                Position
              </Typography>
              <Typography sx={{ fontSize: '1.2rem' }} variant="body1">
                Administrator
              </Typography>
            </TaskList>
          </Grid>
        </BoxCus>
      </AcountSettingWrapper>
    </Container>
  );
};

export default AccountSetting;
