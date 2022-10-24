import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import HeaderDepartment from './HeaderDepartment';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import DepartmentList from './DepartmentList';
import {
  deleteDepartmentList,
  getDepartmentList,
  postDepartmentList
} from 'src/store/slice/department';
import { dispatch, useSelector } from 'src/store';
import Footer from 'src/components/Footer';
import SfDepartment from './SfDepartment';
import AddDepartment from './addDepartment';

const Department = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [idNeedCheckForm, setIdNeedCheckForm] = useState<any>(null);
  const department = useSelector((state) => state.department.department); //department []

  const getListDepart = async () => {
    await dispatch(getDepartmentList());
  };
  console.log(idNeedCheckForm);

  useEffect(() => {
    getListDepart();
  }, [postDepartmentList, deleteDepartmentList]);
  return (
    <div>
      <Container>
        <PageTitleWrapper>
          <HeaderDepartment setOpen={setOpen} setIdNeedCheckForm={setIdNeedCheckForm} />
        </PageTitleWrapper>
        <Container maxWidth="lg">
          <SfDepartment />
          <br />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <DepartmentList
                department={department}
                setOpen={setOpen}
                idNeedCheckForm={idNeedCheckForm}
                setIdNeedCheckForm={setIdNeedCheckForm}
              />
              <AddDepartment
                open={open}
                setOpen={setOpen}
                idNeedCheckForm={idNeedCheckForm}
                setIdNeedCheckForm={setIdNeedCheckForm}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};
export default Department;
