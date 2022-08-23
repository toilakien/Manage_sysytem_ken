import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material"
interface Props{
    open?:boolean,
    setOpen?:any
}
const AddQuestion = (props:Props) => {
    console.log(props.open);
    const handleClose=()=>{
        props.setOpen(false)
    }
  return (
    <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Add question</DialogTitle>
        <DialogContent>
            <TextField value="Position" label="Position" margin="normal"/>
            <TextField value="Rank" label="Rank" margin="normal"/>
        </DialogContent>
    </Dialog>
  )
}


export default AddQuestion