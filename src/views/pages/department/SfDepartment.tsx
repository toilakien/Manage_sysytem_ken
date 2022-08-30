import { Label } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Grid,
  styled,
  TextField,
  Typography
} from '@mui/material';

const SfDepartment = () => {
  const SfDepartmentWrapper = styled(Grid)({});
  const filter = ['All', 'Active', 'Inactive'];
  return (
    <SfDepartmentWrapper>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#fff',
          pt: 3,
          pb: 3,
          pl: 2,
          borderRadius: '5px'
        }}
      >
        <Typography variant="overline">Filter:</Typography>
        <Autocomplete
          disablePortal
          options={filter}
          sx={{ width: 200, ml: 2 }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ height: '5px', '& input': { height: '5px' } }}
            />
          )}
        />
      </Box>
    </SfDepartmentWrapper>
  );
};

export default SfDepartment;
