import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
  styled,
  Chip
} from '@mui/material';
// import apiDepartment from "./data";
import DeleteIcon from '@mui/icons-material/Delete';
import EditButton from '@mui/icons-material/Edit';

import { useState } from 'react';
import AlertDialog from './dialog';
import { DEPARTMENT_URL } from 'src/store/slice/department';
import axios from 'src/utils/axios';
import { UserProfile } from 'src/types/login';
import Detail from './Detail';

const DepartmentList = ({
  department,
  setOpen,
  setIdNeedCheckForm
}: {
  department: any;
  setOpen: any;
  setIdNeedCheckForm: any;
}) => {
  const apiDepartment = [...department];
  const [openD, setOpenD] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [_id, set_Id] = useState<any>(null);

  const [detail, setDetail] = useState<UserProfile>(null);
  const handleOpen = (_id) => {
    setOpenDialog(true);
    set_Id(_id);
  };
  const openFormEdit = (_id, name, code, active) => {
    setOpen(true);
    setIdNeedCheckForm(_id);

  };
  const getDetail = async (_id: any) => {
    const resp = await axios.get(`${DEPARTMENT_URL.getDetailDepartment(_id)}`);
    setDetail(resp.data.customers);
    setOpenD(true);
  };
  const CusButton = styled(Button)({
    border: 'none',
    outline: 'none',
    color: '#223354',
    fontWeight: '300',
    backgroundColor: 'none',
    '&:hover': {
      color: 'red'
    },
    cursor: 'pointer'
  });
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='right'>STT</TableCell>
              {/* <TableCell>Id</TableCell> */}
              <TableCell align="center">Name</TableCell>
              <TableCell align="right">codecription</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell align="right">Updated At</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiDepartment.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                {/* <TableCell align="right">{row._id}</TableCell> */}
                <TableCell align="right">
                  <CusButton onClick={() => getDetail(row._id)} variant="text">
                    {row.name}
                  </CusButton>
                </TableCell>
                <TableCell align="right">{row.code}</TableCell>
                <TableCell align="right">{row.createdAt}</TableCell>
                <TableCell align="right">{row.updatedAt}</TableCell>
                <TableCell align="right">
                  {row.active === 'active' ? (
                    <Chip label="Active" color="success" />
                  ) : (
                    <Chip label="Disable" color="error" />
                  )}
                </TableCell>
                <TableCell align="right" sx={{ display: 'flex' }}>
                  <IconButton
                    sx={{ color: 'red' }}
                    aria-label="delete"
                    onClick={() => handleOpen(row._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    sx={{ color: 'yellow' }}
                    aria-label="edit"
                    onClick={() => openFormEdit(row._id, row.name, row.code, row.active)}
                  >
                    <EditButton />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Detail openD={openD} setOpenD={setOpenD} detail={detail} />
          <AlertDialog open={openDialog} setOpen={setOpenDialog} _id={_id} />
        </Table>
      </TableContainer>
    </div>
  );
};
export default DepartmentList;
