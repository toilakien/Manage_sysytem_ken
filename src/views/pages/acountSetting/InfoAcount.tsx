import { Grid, Typography, Avatar, Button, styled, TextField } from '@mui/material';
import React from 'react'

const InfoAcount = () => {
    const CustomTextField = styled(TextField)({
        width: '100%',
        '& fieldset': {
            borderRadius: "0px",
        },
        '& input': {
            padding: '0px',
            height: '30px',
        }
    });
    const title = [
        {
            label: 'Full Name',
            name: 'fullname'
        },
        {
            label: 'Email',
            name: 'email'
        },
        {
            label: 'Password',
            name: 'password'
        },
        {
            label: 'Text Editor Mode',
            name: 'tem'
        }
    ];
    return (
        <Grid xs={6} sx={{ p: 2, backgroundColor: "#fafafa" }}>
            <Grid container>
                <Grid
                    xs={4}
                    container
                    justifyContent={'end'}
                    alignItems={'center'}
                    sx={{ p: 2 }}
                >
                    <Typography>Profile picture</Typography>
                </Grid>
                <Grid
                    container
                    xs={8}
                    alignItems={'center'}
                    justifyContent="flex-start"
                >
                    <Avatar
                        src="https://cdn.creaz.art/wp-content/uploads/2019/09/69237132_744681625957412_7954643937476476928_o.jpg"
                        sx={{
                            width: '80px', height: '80px', position: 'relative',
                            left: '30px'
                        }}
                    />
                    <Button
                        variant="contained"
                        component="label"
                        sx={{
                            width: '80px',
                            height: '40px',
                            position: 'relative',
                            left: '180px'
                        }}
                    >
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
            </Grid>
            {title.map((t, index) => {
                return (
                    <Grid container key={index} sx={{ p: 2 }}>
                        <Grid
                            xs={4}
                            container
                            justifyContent={'end'}
                            alignItems={'center'}
                            sx={{ pr: 5 }}
                        >
                            <Typography>{t.label}</Typography>
                        </Grid>
                        <Grid container xs={8}>
                            <CustomTextField name={t.name} variant="outlined" />
                        </Grid>
                    </Grid>
                );
            })}
            <Grid container justifyContent={'end'} sx={{ p: 2 }}>
                <Button variant="outlined">
                    Cancel
                </Button>&nbsp;
                <Button variant="outlined">Save</Button>
            </Grid>
        </Grid>
    )
}

export default InfoAcount