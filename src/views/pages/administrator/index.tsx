import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PaginationPage from 'src/components/pa/pagination';
import { dispatch, useSelector } from 'src/store';
import {
  deleteadministratorList,
  getadministratorList,
  postadministratorList
} from 'src/store/slice/administrator';
import AdministratorList from './AdministratorList';
import ToolAdministrator from './ToolAdministrator';

const Administrator = () => {
  const [page, setPage] = useState<any>(1);
  const adm = useSelector((state) => state?.administrator?.administrator);

  const getListAdministrator = async () => {
    await dispatch(getadministratorList());
  };
  useEffect(() => {
    getListAdministrator();
  }, [postadministratorList, deleteadministratorList]);
  return (
    <Grid>
      <Grid
        sx={{
          p: 2,
          boxShadow: '4px 4px 8px 8px #ccc',
          backgroundColor: '#f5f5f5'
        }}
      >
        <Typography variant="h3" color={'blue'}>
          Administrator
        </Typography>
      </Grid>
      <Grid>
        <ToolAdministrator />
        <AdministratorList state={adm} />
      </Grid>
      <Grid sx={{ mt: 2 }}>
        <PaginationPage pageCount={10} currentPage={1} setPage={setPage} />
      </Grid>
    </Grid>
  );
};

export default Administrator;
