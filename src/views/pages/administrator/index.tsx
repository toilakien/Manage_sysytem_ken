import { Grid, Typography } from '@mui/material'
import React from 'react'
import PageTitleWrapper from 'src/components/PageTitleWrapper'
import AdministratorList from './AdministratorList'
import ToolAdministrator from './ToolAdministrator'

const Administrator = () => {
    return (
        <Grid>
            <Grid sx={{ p: 2, boxShadow: "4px 4px 8px 8px #ccc", backgroundColor: "#f5f5f5" }}  >
                <Typography variant='h3'>Administrator</Typography>
            </Grid>
            <Grid>
                <Grid>
                    <ToolAdministrator />
                </Grid>
                <Grid>
                    <AdministratorList />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Administrator