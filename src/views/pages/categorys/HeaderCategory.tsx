import { Grid, Typography } from '@mui/material';
import React from 'react';

const HeaderCategory = () => {
  return (
    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{ color: '#00695c' }} variant="h3">
        Categorys
      </Typography>
    </Grid>
  );
};

export default HeaderCategory;
