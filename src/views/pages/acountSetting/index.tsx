import { Avatar, Button, Grid, styled, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
const AccountSetting = () => {
    const CustomTextField = styled(TextField)({
        width: "100%",
        '& input': {
            padding: "0px",
            height: "40px"
        }
    })
    const title = [
        {
            label: "Full Name",
            name: "fullname",
        },
        {
            label: "Email",
            name: "email",
        },
        {
            label: "Password",
            name: "password",
        },
        {
            label: "Text Editor Mode",
            name: "tem",
        },
    ]
    return (
        <Grid padding={5}>
            <PageTitleWrapper>
                <Typography variant='h3'>Acount setting</Typography>
            </PageTitleWrapper>
            <Grid container >
                <Grid xs={2} container justifyContent={"end"} alignItems={"center"} sx={{ pr: 5 }}>
                    <Typography>Profile picture</Typography>
                </Grid>
                <Grid container xs={10} alignItems={'center'} justifyContent="flex-start" sx={{ pl: 5 }}>
                    <Avatar src='https://cloud.google.com/static/looker/docs/images/browse-account-page-profile-514-v2.png' sx={{ width: "100px", height: "100px" }} />
                    <Button variant="contained" component="label" sx={{ width: "100px", height: "50px", position: "relative", left: "100px" }}>
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
            </Grid>
            {
                title.map((t, index) => {
                    return (
                        <Grid container key={index} sx={{ p: 2 }}>
                            <Grid xs={2} container justifyContent={"end"} alignItems={"center"} sx={{ pr: 5 }}>
                                <Typography>{t.label}</Typography>
                            </Grid>
                            <Grid container xs={10}>
                                <CustomTextField name={t.name} variant='outlined' />
                            </Grid>
                        </Grid>
                    )
                })
            }
            <Grid container justifyContent={"end"}>
                <Button sx={{ pr: 2 }} variant='outlined'>Cancel</Button>
                <Button variant='outlined'>Save</Button>
            </Grid>

        </Grid>
    );
};

export default AccountSetting;
