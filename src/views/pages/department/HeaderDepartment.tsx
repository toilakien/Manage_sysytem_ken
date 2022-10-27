import { Grid, Typography } from '@mui/material';

const HeaderDepartment = () => {
  return (
    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{ color: '#00695c' }} variant="h3">
        Customers
      </Typography>
    </Grid>
  );
};
export default HeaderDepartment;
