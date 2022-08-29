import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import HeaderLanguage from './HeaderLanguage';
import LanguageList from './LanguageList';
import { renderLanguageList } from 'src/store/slice/language';
import { dispatch, useSelector } from 'src/store';

const Language = () => {
  const apiList = async () => {
    await dispatch(renderLanguageList());
  };
  useEffect(() => {
    apiList();
  }, []);
  const languageList = useSelector((state) => state.language.language);
  return (
    <div>
      <Container>
        <PageTitleWrapper>
          <HeaderLanguage />
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
              <LanguageList languageList={languageList} />
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default Language;
