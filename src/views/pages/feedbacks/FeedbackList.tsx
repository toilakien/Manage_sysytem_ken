import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  IconButton,
  Button
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditButton from '@mui/icons-material/Edit';
const FeedbackList = () => {
  const fakeApiCategry = [
    {
      _id: 1,
      customer_id: 2,
      content: 'This htam jfsjaj ',
      createdAt: '2022-10-26T07:07:50.915Z',
      updatedAt: '2022-10-26T07:07:50.915Z'
    },
    {
      _id: 1,
      customer_id: 2,
      content: 'This htam jfsjaj ',
      createdAt: '2022-10-26T07:07:50.915Z',
      updatedAt: '2022-10-26T07:07:50.915Z'
    },
    {
      _id: 1,
      customer_id: 2,
      content: 'This htam jfsjaj ',
      createdAt: '2022-10-26T07:07:50.915Z',
      updatedAt: '2022-10-26T07:07:50.915Z'
    },
    {
      _id: 1,
      customer_id: 2,
      content: 'This htam jfsjaj ',
      createdAt: '2022-10-26T07:07:50.915Z',
      updatedAt: '2022-10-26T07:07:50.915Z'
    },
    {
      _id: 1,
      customer_id: 2,
      content: 'This htam jfsjaj ',
      createdAt: '2022-10-26T07:07:50.915Z',
      updatedAt: '2022-10-26T07:07:50.915Z'
    }
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">STT</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">UserName</TableCell>

            <TableCell align="right">Created At</TableCell>
            <TableCell align="right">Updated At</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeApiCategry.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              {/* <TableCell align="right">{row._id}</TableCell> */}
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.customer_id}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>

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
  );
};

export default FeedbackList;
