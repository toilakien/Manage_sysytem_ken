import { Grid, Typography } from '@mui/material'
import React from 'react'

const HeaderProduct = () => {
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ color: '#00695c' }} variant="h3">
                Products
            </Typography>
        </Grid>
    )
}

export default HeaderProduct