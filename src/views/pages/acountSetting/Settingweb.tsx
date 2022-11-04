import { Grid, Switch, Typography } from '@mui/material'
import React from 'react'

const Settingweb = () => {
    const mode = [
        {
            name: "Themes",
        },
        {
            name: "Public",
        },
        {
            name: "Mode Pro",
        },
        {
            name: "Backup and synchronized",
        },
        {
            name: "Backup and synchronized",
        },
        {
            name: "Backup and synchronized",
        },
    ]
    return (
        <Grid xs={4} sx={{ pl: 2 }}>
            {
                mode.map((m, index) => {
                    return (
                        <Grid container justifyContent={'end'} alignItems={"center"} key={index} sx={{ p: 2, backgroundColor: "#fafafa" }}>
                            <Typography align='right' sx={{ width: "70%",pr:2 }}>{m.name}</Typography>
                            <Switch {...m} defaultChecked /><br />
                        </Grid>
                    )
                })
            }
        </Grid >
    )
}

export default Settingweb