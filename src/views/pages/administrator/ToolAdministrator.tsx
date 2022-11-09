import { ButtonGroup, Button, Grid, TextField, styled, Popover, Typography, Select, FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import { id } from 'date-fns/locale';
import React, { useState } from 'react';

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
        <FormControl fullWidth>
          <InputLabel sx={{mt:-1}} id="">Filter</InputLabel>
          <Select
            labelId=""
            id="demo-simple-select"
            // value={age}
            label="Age"
          // onChange={handleChange}
          sx={{width:"100px",height:"30px"}}
          >
            <MenuItem value={10}>Active</MenuItem>
            <MenuItem value={20}>Disable</MenuItem>
          </Select>
        </FormControl>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <ButtonCustomurize>Import</ButtonCustomurize>
        <ButtonCustomurize>Export</ButtonCustomurize>
        <ButtonCustomurize>Clear</ButtonCustomurize>
      </ButtonGroup>
    </Grid>
  );
};

export default ToolAdministrator;
