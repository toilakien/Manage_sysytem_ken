import {  Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const Detail=({openD,setOpenD,detail}:any)=>{
    const handleClose=()=>{
        setOpenD(false);
    }
    return (
        <Dialog open={openD} onClose={handleClose}>
            <Grid sx={{display:"flex",alignItems:"center"}}>
            <IconButton sx={{width:"40px",position:"relative",left:"92%"}} onClick={handleClose}><CloseIcon sx={{color:"red"}}/></IconButton>
            <DialogTitle sx={{position:"relative",left:"32%"}} textTransform={"uppercase"} variant="h3">Detail</DialogTitle>
            </Grid>
            {detail?<DialogContent>
                Name:<TextField value={detail.name}disabled sx={{width:"100%"}}/>
                Code: <TextField value={detail.code} disabled sx={{width:"100%"}}/>
                Status:<TextField value={detail.status?"Active":"None"}disabled sx={{width:"100%"}}/>
                Created_at:<TextField value={detail.created_at}disabled sx={{width:"100%"}}/>
                Updated_at:<TextField value={detail.updated_at}disabled sx={{width:"100%"}}/>
            </DialogContent>:""}
        </Dialog>
    )
}
export default Detail;