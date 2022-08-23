import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  styled,
  TextField,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
interface Props {
  open?: boolean;
  setOpen?: any;
}
const AddQuestion = (props: Props) => {
  console.log(props.open);
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle sx={{ fontSize: '1.6rem', ml: 2 ,borderBottom:"2px solid #ccc",width:"94%"}}>Add question</DialogTitle>
      <DialogContent>
        <TextField label="Type" margin="normal" sx={{ width: '100%' }} />
        <TextField label="Rank" margin="normal" sx={{ width: '100%' }} />
        <TextField label="Position" margin="normal" sx={{ width: '100%' }} />
        <TextField label="Queston Content" margin="normal" sx={{ width: '100%' }} />
        <TextField label="Anwer" margin="normal" sx={{ width: '100%' }} />

        <Button variant="outlined" sx={{ mt: 2, width: '100%' }}>
          SAVE
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuestion;
