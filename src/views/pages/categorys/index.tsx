import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import CategoryList from './CategoryList';
import HeaderCategory from './HeaderCategory';

const Categorys = () => {
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
                        <CategoryList />
                    </Grid>
                </Grid>
            </Container>
        </Grid >
    )
}

export default Categorys