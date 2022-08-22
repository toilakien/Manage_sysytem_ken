import { Grid, IconButton, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from "react";

const HeaderQuestion = () => {
    const handleClick = () => {
        setOpen(true);
    }
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{color:"#00695c"}} variant="h3">Question</Typography>
            <IconButton onClick={handleClick}>
                <AddCircleIcon />
            </IconButton>
        </Grid>
    )
}
export default HeaderQuestion;