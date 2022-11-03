import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

export default function PaginationPage({ pageCount, currentPage, setPage }: { pageCount: any, currentPage: any, setPage: any }) {
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <Grid container justifyContent={"center"}>
            <Stack padding={2}>
                <Pagination count={pageCount} page={currentPage} onChange={handleChange} />
            </Stack>
        </Grid>
    );
}
