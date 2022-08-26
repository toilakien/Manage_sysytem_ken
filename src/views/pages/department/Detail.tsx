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
  const ButtonDetails = styled(Button)({
    color: '#fff',
    border: '1px solid #ddd',
    backgroundColor: '#3949ab',
    width: '200px',
    marginTop: '10px',
    position: 'relative',
    left: '30%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    
  });
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
          sx={{
            position: 'relative',
            left: '32%',
            color: 'blue',
            fontFamily: 'cursive'
          }}
          textTransform={'uppercase'}
          variant="h3"
        >
          Detail
        </DialogTitle>
      </Grid>
      {detail ? (
        <DialogContent>
          <TextField
            margin="normal"
            label={detail.name}
            value={detail.name}
            disabled
            sx={{ width: '100%' }}
          />
          <TextField
            margin="normal"
            label={detail.code}
            value={detail.code}
            disabled
            sx={{ width: '100%' }}
          />
          <TextField
            margin="normal"
            label={'Status'}
            value={detail.status ? 'Active' : 'None'}
            disabled
            sx={{ width: '100%' }}
          />
          <TextField
            margin="normal"
            label={'Created_at'}
            value={detail.created_at}
            disabled
            sx={{ width: '100%' }}
          />
          <TextField
            margin="normal"
            label={'Updated_at'}
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
