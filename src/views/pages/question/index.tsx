import { Box, Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import HeaderQuestion from './HeaderQuestion';
import QuestionList from './QuestionList';

const QuestionPage = () => {
  return (
    <div>
      <Container>
        <PageTitleWrapper>
          <HeaderQuestion />
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
                <QuestionList/>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default QuestionPage;
