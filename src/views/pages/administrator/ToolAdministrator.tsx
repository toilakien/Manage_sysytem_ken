import { ButtonGroup, Button, Grid, TextField, styled } from '@mui/material';
import React from 'react';

const ToolAdministrator = () => {
  const ButtonCustomurize = styled(Button)({
    height: '30px'
  });
  const InputText = styled(TextField)({
    marginRight: '5px',
    '& input': {
      padding: '0px',
      height: '30px'
    }
  });
  return (
    <Grid
      sx={{ backgroundColor: '#fafafa', p: 2 }}
      container
      justifyContent={'space-between'}
    >
      <ButtonGroup variant="outlined">
        <InputText variant="outlined" />
        <ButtonCustomurize>Search</ButtonCustomurize>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <ButtonCustomurize>Filter</ButtonCustomurize>
        <ButtonCustomurize>Import</ButtonCustomurize>
        <ButtonCustomurize>Export</ButtonCustomurize>
        <ButtonCustomurize>Clear</ButtonCustomurize>
      </ButtonGroup>
    </Grid>
  );
};

export default ToolAdministrator;
