import {
    Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  styled,
  TextField
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
const Detail = ({ openD, setOpenD, detail }: any) => {
  const handleClose = () => {
    setOpenD(false);
  };
  const ButtonDetails=styled(Button)({
        border:"1px solid #00b0ff",
        marginTop:"10px",
        position:"relative",
        left:"40%",
        backgroundColor:"#33eaff",
        cursor:"pointer",
        '&:hover':{
            backgroundColor:"#fff",
            color:"#33eaff"
        }
  })
  return (
    <Dialog open={openD} onClose={handleClose}>
      <Grid sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          sx={{ width: '40px', position: 'relative', left: '92%' }}
          onClick={handleClose}
        >
          <CloseIcon sx={{ color: 'red' }} />
        </IconButton>
        <DialogTitle
          sx={{ position: 'relative', left: '32%' }}
          textTransform={'uppercase'}
          variant="h3"
        >
          Detail
        </DialogTitle>
      </Grid>
      {detail ? (
        <DialogContent>
          Name:
          <TextField value={detail.name} disabled sx={{ width: '100%' }} />
          Code:
          <TextField value={detail.code} disabled sx={{ width: '100%' }} />
          Status:
          <TextField
            value={detail.status ? 'Active' : 'None'}
            disabled
            sx={{ width: '100%' }}
          />
          Created_at:
          <TextField
            value={detail.created_at}
            disabled
            sx={{ width: '100%' }}
          />
          Updated_at:
          <TextField
            value={detail.updated_at}
            disabled
            sx={{ width: '100%' }}
          />
          <ButtonDetails>Save</ButtonDetails>
        </DialogContent>
      ) : (
        <Box></Box>
      )}
    </Dialog>
  );
};
export default Detail;
