import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from '@mui/material';
// import apiDepartment from "./data";
import DeleteIcon from '@mui/icons-material/Delete';
import EditButton from '@mui/icons-material/Edit';

import { useState } from 'react';
import AlertDialog from './dialog';

const DepartmentList = ({ department }) => {
  const apiDepartment = [...department];
  
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<number>(null);
  const handleOpen = (id: any) => {
    setOpen(true);
    setId(id);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell align="right">Updated At</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Ations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiDepartment.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{index}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.code}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
                <TableCell align="right">{row.updated_at}</TableCell>
                <TableCell align="right">
                  {row.status ? 'Active' : 'no'}
                </TableCell>
                <TableCell align="right" sx={{ display: 'flex' }}>
                  <IconButton
                    sx={{color:'red'}}
                    aria-label="delete"
                    onClick={() => handleOpen(row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton 
                    sx={{color:'yellow'}}
                    aria-label="edit"
                    >
                    <EditButton />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AlertDialog open={open} id={id} setOpen={setOpen} />
      </TableContainer>
    </div>
  );
};
export default DepartmentList;
