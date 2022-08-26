import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button
} from '@mui/material';

// import apiDepartment from "./data";
import DeleteIcon from '@mui/icons-material/Delete';
import EditButton from '@mui/icons-material/Edit';
import { dispatch } from 'src/store';
import { deleteLanguageList } from 'src/store/slice/language';

const LanguageList = ({languageList}:{languageList:any}) => {
  
  const handleDelete=(id:any)=>{
    dispatch(deleteLanguageList(id))
  }
  if (languageList) {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Created At</TableCell>
                <TableCell align="right">Updated At</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Ations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {languageList.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{index}</TableCell>
                  <TableCell align="left">
                    <Button variant="text">{row.name}</Button>
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.created_at}</TableCell>
                  <TableCell align="right">{row.updated_at}</TableCell>
                  <TableCell align="right">
                    {row.status ? 'Active' : 'no'}
                  </TableCell>
                  <TableCell align="right" sx={{ display: 'flex' }}>
                    <IconButton sx={{ color: 'red' }} aria-label="delete" onClick={()=>handleDelete(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton sx={{ color: 'yellow' }} aria-label="edit">
                      <EditButton />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
};

LanguageList.propTypes = {};

export default LanguageList;
