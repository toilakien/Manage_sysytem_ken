import {
  Avatar,
  Button,
  Grid,
  styled,
  TextField,
  Typography
} from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import InfoAcount from './InfoAcount';
import Settingweb from './Settingweb';
const AccountSetting = () => {

  return (
    <Grid padding={5}>
      <PageTitleWrapper>
        <Typography variant="h3">Acount setting</Typography>
      </PageTitleWrapper>
      <Grid container>
        <InfoAcount />
        <Settingweb />
      </Grid>
    </Grid>
  );
};

export default AccountSetting;
