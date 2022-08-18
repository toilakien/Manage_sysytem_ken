import { Grid, Icon, IconButton, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddDepartment from "./addDepartment";
import React from "react";

const HeaderDepartment = () => {
    const handleClick = () => {
        setOpen(true);
    }
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{color:"#00695c"}} variant="h3">Department</Typography>
            <IconButton onClick={handleClick}>
                <AddCircleIcon />
            </IconButton>
            <AddDepartment props={open} close={setOpen} />
        </Grid>
    )
}
export default HeaderDepartment;