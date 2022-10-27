import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, IconButton } from '@mui/material'


import DeleteIcon from '@mui/icons-material/Delete';
import EditButton from '@mui/icons-material/Edit';
const CategoryList = ({ category }: { category: any }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>STT</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Created At</TableCell>
                        <TableCell align="right">Updated At</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {category?.map((row, index) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{index + 1}</TableCell>
                            {/* <TableCell align="right">{row._id}</TableCell> */}
                            <TableCell align="right">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            <TableCell align="right">{row.updatedAt}</TableCell>

                            <TableCell align="right" sx={{ display: 'flex' }}>
                                <IconButton
                                    sx={{ color: 'red' }}
                                    aria-label="delete"

                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton
                                    sx={{ color: 'yellow' }}
                                    aria-label="edit"

                                >
                                    <EditButton />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CategoryList