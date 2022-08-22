import React, { useEffect, useState } from 'react';
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
import axios from 'src/utils/axios';
const QuestionList = () => {
    const [apiQuestion,setapiQuestion]=useState([]);
  const a = async () => {
    const resp=await axios.get('http://54.179.46.124/api/v1/operator/questions');
        setapiQuestion(resp.data.success.data);
        
  };
  useEffect(()=>{
    a();
  },[])
  console.log(apiQuestion);
  
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Question Content</TableCell>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Updated At</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Ations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiQuestion.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{index}</TableCell>
                <TableCell align="right">{row.question_content}</TableCell>
                <TableCell align="left">
                  <Button variant="text">{row.rank.description}</Button>
                </TableCell>
                <TableCell align="right">{row.rank.name}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
                <TableCell align="right">{row.updated_at}</TableCell>
                <TableCell align="right">
                  {row.status ? 'Active' : 'no'}
                </TableCell>
                <TableCell align="right" sx={{ display: 'flex' }}>
                  <IconButton sx={{ color: 'red' }} aria-label="delete">
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
};

export default QuestionList;
