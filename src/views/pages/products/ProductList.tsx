import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, IconButton, Button } from '@mui/material'


import DeleteIcon from '@mui/icons-material/Delete';
import EditButton from '@mui/icons-material/Edit';
const ProductList = () => {
    const fakeApiProduct = [
        {
            _id: 1,
            name: "Motorbike",
            category_id: 7,
            price: 2000,
            status: "active",
            amount: 100,
            createdAt: "2022-10-26T07:07:50.915Z",
            updatedAt: "2022-10-26T07:07:50.915Z",
        },
        {
            _id: 1,
            name: "Motorbike",
            category_id: 7,
            price: 2000,
            status: "active",
            amount: 100,
            createdAt: "2022-10-26T07:07:50.915Z",
            updatedAt: "2022-10-26T07:07:50.915Z",
        },
        {
            _id: 1,
            name: "Motorbike",
            category_id: 7,
            price: 2000,
            status: "active",
            amount: 100,
            createdAt: "2022-10-26T07:07:50.915Z",
            updatedAt: "2022-10-26T07:07:50.915Z",
        },

    ]
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>STT</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Created At</TableCell>
                        <TableCell align="right">Updated At</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fakeApiProduct.map((row, index) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{index + 1}</TableCell>
                            {/* <TableCell align="right">{row._id}</TableCell> */}
                            <TableCell align="right">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>

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

export default ProductList