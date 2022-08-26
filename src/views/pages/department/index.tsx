import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import HeaderDepartment from "./HeaderDepartment";
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import DepartmentList from "./DepartmentList";
import { deleteDepartmentList, getDepartmentList, postDepartmentList } from "src/store/slice/department";
import { dispatch, useSelector } from "src/store";
import Footer from "src/components/Footer";
import SfDepartment from "./SfDepartment";

const Department = () => {

    const department = useSelector(state => state.department.department); //department [] 

    const getListDepart = async () => {
        await dispatch(getDepartmentList());
    };

    useEffect(() => {
        getListDepart();
    }, [postDepartmentList,deleteDepartmentList])
    return (
        <div>
            <Container>
                <PageTitleWrapper>
                    <HeaderDepartment />
                </PageTitleWrapper>
                <Container maxWidth="lg">
                <SfDepartment/><br/>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12}>
                            <DepartmentList department={department} />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}
export default Department;