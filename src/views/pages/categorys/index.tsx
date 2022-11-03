import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { dispatch, useSelector } from 'src/store';
import { getcategoryList } from 'src/store/slice/category';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import CategoryList from './CategoryList';
import HeaderCategory from './HeaderCategory';

const Categorys = () => {
  const getCategory = async () => {
    await dispatch(getcategoryList());
  };
  useEffect(() => {
    getCategory();
  }, []);
  const category = useSelector((state) => state?.category?.category);

  return (
    <Grid>
      <PageTitleWrapper>
        <HeaderCategory />
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
            <CategoryList category={category} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Categorys;
