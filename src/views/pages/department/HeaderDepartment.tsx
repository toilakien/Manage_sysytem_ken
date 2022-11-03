import { Grid, Typography } from '@mui/material';

const HeaderDepartment = () => {
  return (
    <Grid sx={{ p: 2, backgroundColor: "#fafafa", boxShadow: "0 4px 4px 0 #ccc" }}>
      <Typography sx={{ color: '#00695c', ml: 2 }} variant="h3">
        Customers
      </Typography>
    </Grid >
  );
};
export default HeaderDepartment;
