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

import { useState } from 'react';
import AlertDialog from './dialog';
import AddDepartment from './addDepartment';
import { DEPARTMENT_URL} from 'src/store/slice/department';
import axios from 'src/utils/axios';
import { UserProfile } from 'src/types/login';
import Detail from './Detail';

const DepartmentList = ({ department }) => {
  const apiDepartment = [...department];
  const [openD, setOpenD] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<number>(null);
  const [des, setDes] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<boolean>(false);
  const [detail,setDetail]=useState<UserProfile>(null);
  const handleOpen = (id: any) => {
    setOpen(true);
    setId(id);
  };
  const openFormEdit = (id: any) => {
    setId(id);
    setType(true);
    const e = apiDepartment.find((e) => e.id === id);
    setDes(e.code);
    setName(e.name);
    setOpen(true);
  };
  const getDetail=async(id:any)=>{
    const resp=await axios.get(`${DEPARTMENT_URL.getDetailDepartment(id)}`);
    setDetail(resp.data.success)
    setOpenD(true);
    
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
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
                <TableCell align="left"><Button onClick={()=>getDetail(row.id)} variant="text">{row.name}</Button></TableCell>
                <TableCell align="right">{row.code}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
                <TableCell align="right">{row.updated_at}</TableCell>
                <TableCell align="right">
                  {row.status ? 'Active' : 'no'}
                </TableCell>
                <TableCell align="right" sx={{ display: 'flex' }}>
                  <IconButton
                    sx={{ color: 'red' }}
                    aria-label="delete"
                    onClick={() => handleOpen(row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    sx={{ color: 'yellow' }}
                    aria-label="edit"
                    onClick={() => openFormEdit(row.id)}
                  >
                    <EditButton />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Detail openD={openD} setOpenD={setOpenD} detail={detail}/>
        </Table>
        {!type ? (
          <AlertDialog open={open} id={id} setOpen={setOpen} />
        ) : (
          <AddDepartment props={open}  close={setOpen} des={des} name={name} type={type} id={id}/>
        )}
      </TableContainer>
    </div>
  );
};
export default DepartmentList;
