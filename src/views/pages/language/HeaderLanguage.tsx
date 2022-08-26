import { Grid, IconButton, styled, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from "react";

const HeaderLanguage = () => {
    const handleClick = () => {
        setOpen(true);
    }
    const [open, setOpen] = React.useState<boolean>(false);
    const IconButtonCustom=styled(IconButton)({
        color:"blue",
        transition:"color 1s",
        "&:hover":{
            color:"red",
            transform:"scale(1.1)" 
        }
    })
    return (
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{color:"#00695c"}} variant="h3">Language</Typography>
            <IconButtonCustom onClick={handleClick}>
                <AddCircleIcon />
            </IconButtonCustom>
        </Grid>
    )
}
export default HeaderLanguage;