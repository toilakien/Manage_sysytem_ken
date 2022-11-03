import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  IconButton,
  styled,
  SelectChangeEvent
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import React from 'react';
import {
  filterDepartmentList,
  getDepartmentList
} from '../../../store/slice/department';
import { dispatch } from '../../../store/index';

const SfDepartment = ({
  setOpen,
  setIdNeedCheckForm
}: {
  setOpen: any;
  setIdNeedCheckForm: any;
}) => {
  const [active, setActive] = useState<any>('');
  console.log(active);

  React.useEffect(() => {
    if (active) {
      dispatch(filterDepartmentList(active));
    }
  }, [active]);
  const handleClick = () => {
    setOpen(true);
    setIdNeedCheckForm(null);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setActive(event.target.value);
  };
  const IconButtonCustom = styled(IconButton)({
    color: 'blue',
    transition: 'color 1s',
    '&:hover': {
      color: 'red',
      transform: 'scale(1.1)'
    }
  });
  const OptionFilter = [
    {
      value: 'all',
      label: 'All'
    },
    {
      value: 'active',
      label: 'active'
    },
    {
      value: 'disable',
      label: 'disable'
    }
  ];
  return (
    <Grid
      sx={{ p: 2, backgroundColor: '#fafafa' }}
      container
      justifyContent={'space-between'}
    >
      <FormControl sx={{ width: 300, marginRight: '30px' }}>
        <InputLabel style={{ top: '-10px' }}>Filter</InputLabel>
        <Select
          id="active"
          name="active"
          label="active"
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={handleChange}
          value={active}
          sx={{ height: '30px' }}
        >
          {OptionFilter.map((o: any, index: number) => (
            <MenuItem key={index} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <IconButtonCustom onClick={handleClick}>
        <AddCircleIcon />
      </IconButtonCustom>
    </Grid>
  );
};

export default SfDepartment;
