import React, { useEffect, useState } from 'react';
import {Grid } from '@mui/material';
import HeaderDepartment from './HeaderDepartment';
import DepartmentList from './DepartmentList';
import {
  deleteDepartmentList,
  filterDepartmentList,
  getDepartmentList,
  postDepartmentList
} from 'src/store/slice/department';
import { dispatch, useSelector } from 'src/store';
import Footer from 'src/components/Footer';
import SfDepartment from './SfDepartment';
import AddDepartment from './addDepartment';
import PaginationPage from 'src/components/pa/pagination';

const Department = () => {
  const [page, setPage] = useState<any>(1);
  const [open, setOpen] = useState<boolean>(false);
  const [idNeedCheckForm, setIdNeedCheckForm] = useState<any>(null);
  const department = useSelector((state) => state?.department?.department); //department []
  const currentPage = useSelector((state) => state?.department?.currentPage); //department []
  const pageCount = useSelector((state) => state?.department?.pageCount); //department []

  const getListDepart = async () => {
    await dispatch(getDepartmentList(page));
  };
  useEffect(() => {
    getListDepart();
  }, [postDepartmentList, deleteDepartmentList, filterDepartmentList, page]);
  return (
    <div>
      <Grid>
        <HeaderDepartment />
        <Grid sx={{ p: 2 }}>
          <SfDepartment
            setOpen={setOpen}
            setIdNeedCheckForm={setIdNeedCheckForm}
          />
          <br />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <DepartmentList
                currentPage={currentPage}
                department={department}
                setOpen={setOpen}
                setIdNeedCheckForm={setIdNeedCheckForm}
              />
              <PaginationPage
                setPage={setPage}
                currentPage={currentPage}
                pageCount={pageCount}
              />
              <AddDepartment
                open={open}
                setOpen={setOpen}
                idNeedCheckForm={idNeedCheckForm}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};
export default Department;
