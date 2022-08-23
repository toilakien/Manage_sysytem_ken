import { Grid, IconButton, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useState } from "react";
import AddQuestion from "./AddQuestion";
const HeaderQuestion = () => {
    const [open,setOpen]=useState<boolean>(false);
    const handleClick = () => {
        setOpen(true);
    }
    return (
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{color:"#00695c"}} variant="h3">Question</Typography>
            <IconButton onClick={handleClick}>
                <AddCircleIcon />
            </IconButton>
            <AddQuestion open={open} setOpen={setOpen}/>
        </Grid>
    )
}
export default HeaderQuestion;