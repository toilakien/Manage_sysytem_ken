import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import React from 'react'

const AdministratorList = ({ state }: { state: any }) => {

    return (
        <Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Stt</TableCell>
                            <TableCell align="right">Username</TableCell>
                            <TableCell align="right">Password</TableCell>
                            <TableCell align="right">Created At</TableCell>
                            <TableCell align="right">Updated At</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state?.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="center">{index + 1}</TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.password}</TableCell>
                                <TableCell align="right">{row.createdAt}</TableCell>
                                <TableCell align="right">{row.updatedAt}</TableCell>
                                <TableCell align="center">
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default AdministratorList