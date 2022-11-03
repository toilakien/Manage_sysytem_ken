import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import FeedbackList from './FeedbackList';
import HeaderFeedback from './HeaderFeedback';

const Feedbacks = () => {
  return (
    <Grid>
      <PageTitleWrapper>
        <HeaderFeedback />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <FeedbackList />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Feedbacks;
