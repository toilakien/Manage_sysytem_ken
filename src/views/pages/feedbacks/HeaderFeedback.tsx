import { Grid, Typography } from '@mui/material';
import React from 'react';

const HeaderFeedback = () => {
  return (
    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{ color: '#00695c' }} variant="h3">
        Feedbacks
      </Typography>
    </Grid>
  );
};

export default HeaderFeedback;
