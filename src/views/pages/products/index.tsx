import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import ProductList from './ProductList';
import HeaderProduct from './HeaderProduct';

const Products = () => {
    return (
        <Grid>
            <PageTitleWrapper>
                <HeaderProduct />
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
                        <ProductList />
                    </Grid>
                </Grid>
            </Container>
        </Grid >
    )
}

export default Products